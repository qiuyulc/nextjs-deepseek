"use client";
import { useRef, useEffect, useState, useMemo } from "react";
import TextArea from "@/app/components/TextArea";
import NavBar from "@/app/components/NavBar";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useChat } from "@ai-sdk/react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import { useTheme } from "next-themes";
import { theme as themeStyle } from "./theme";
// import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
const ChatPage = () => {
  const { chat_id } = useParams();
  const { theme } = useTheme();
  const [prop_model, setPropModel] = useState("");
  //查询词条记录
  const { data: chat } = useQuery({
    queryKey: ["chat", chat_id],
    queryFn: () => {
      return axios.post("/api/get-chat", {
        chat_id: chat_id,
      });
    },
  });

  const { data: previousMessages, isPending } = useQuery({
    queryKey: ["messages", chat_id],
    queryFn: () => {
      return axios.post("/api/get-messages", {
        chat_id: chat_id,
        chat_user_id: chat?.data?.userId,
      });
    },
    enabled: !!chat?.data?.id,
  });

  const { messages, input, handleInputChange, handleSubmit, append } = useChat({
    body: {
      model: chat?.data.model,
      chat_id: chat_id,
      chat_user_id: chat?.data?.userId,
    },
    initialMessages: previousMessages?.data,
  });

  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (endRef.current) {
      endRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleFirstMessage = async (modelStr: string) => {
    if (chat?.data.title && previousMessages?.data?.length === 0) {
      await append(
        {
          role: "user",
          content: chat?.data.title,
        },
        {
          body: {
            model: modelStr,
            chat_id: chat_id,
            chat_user_id: chat?.data?.userId,
          },
        }
      );
    }
  };
  
  useEffect(() => {
    if (chat?.data.title) {
      setPropModel(chat?.data.model);
      handleFirstMessage(chat?.data.model);
    }
  }, [chat?.data.title, previousMessages]);

  const handleMessageLists = useMemo(() => {
    if (isPending) {
      return <div>Loading...</div>;
    }
    return messages.map((message) => {
      return (
        <div
          key={message.id}
          className={`rounded-lg flex flex-row mb-6 ${
            message?.role === "assistant" ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className={`inline-block p-2 rounded-lg max-w-8/10 ${
              message?.role === "assistant"
                ? "bg-blue-300"
                : "bg-slate-100 text-blue-600/100"
            }`}
          >
            {message.role === "user" ? "User: " : "AI: "}
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ children, className }) {
                  const match: RegExpExecArray | null = /language-(\w+)/.exec(
                    className || ""
                  );
                  return (
                    <>
                      {match ? (
                        <SyntaxHighlighter
                          showLineNumbers={true}
                          language={match && match[1]}
                          style={themeStyle["dark"]}
                        >
                          {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                      ) : (
                        <code className={className}>{children}</code>
                      )}
                    </>
                  );
                },
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        </div>
      );
    });
  }, [messages, theme, isPending]);
  return (
    <div className="w-screen h-screen flex flex-row">
      <NavBar />
      <div className="w-screen lg:w-4/5 h-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700">
        <div className="w-full h-8/10 p-7 pt-14 overflow-hidden">
          <div className="h-full w-full p-7 overflow-y-auto">
            {handleMessageLists}
          </div>
        </div>
        <div className="w-4/5 h-2/10 mb-6">
          <TextArea
            model={prop_model}
            handleInputChange={handleInputChange}
            input={input}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
