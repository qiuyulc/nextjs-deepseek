"use client";
import TextArea from "@/app/components/TextArea";
import NavBar from "@/app/components/NavBar";
import { useChat } from "@ai-sdk/react";

const ChatPage = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="w-screen h-screen flex flex-row">
      <NavBar />
      <div className="w-screen lg:w-4/5 h-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700">
        <div className="w-full h-8/10 p-7 pt-14 overflow-hidden">
          <div className="h-full w-full p-7 overflow-y-auto">
            {messages.map((message) => {
              return (
                <div
                  key={message.id}
                  className={`rounded-lg flex flex-row mb-6 ${
                    message?.role === "assistant"
                      ? "justify-start"
                      : "justify-end"
                  }`}
                >
                  <p
                    className={`inline-block p-2 rounded-lg max-w-8/10 ${
                      message?.role === "assistant"
                        ? "bg-blue-300"
                        : "bg-slate-100 text-blue-600/100"
                    }`}
                  >
                    {message.role === "user" ? "User: " : "AI: "}
                    {message.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-4/5 h-2/10 mb-6">
          <TextArea
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
