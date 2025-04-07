"use client";
import { useState } from "react";
import NavBar from "@/app/components/NavBar";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import TextArea from "@/app/components/TextArea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UseChatHelpers } from "@ai-sdk/react";
import axios from "axios";

export default function Home() {
  

  const [input, setInput] = useState<string>("");
  const queryClient = useQueryClient();
  const user = useUser();
  const router = useRouter();
  const { mutate: createChat } = useMutation({
    mutationFn: (data: { title: string; model: string }) => {
      return axios.post("/api/create-chat", { ...data });
    },
    onSuccess: (res) => {
      router.push(`/chat/${res.data.id}`);
      queryClient.invalidateQueries({ queryKey: ["chats"] });
    },
  });

  const handleSubmit: UseChatHelpers["handleSubmit"] = async (
    undefined,
    data
  ) => {
    if (input.trim() === "") return;

    if (!user) {
      router.replace("/sign-in"); //暂时先这样
    }

    const { body } = data as { body: { model: string } };

    createChat({ title: input, model: body?.model as string });
  };
  const handleInputChange: UseChatHelpers["handleInputChange"] = (event) => {
    setInput(event.target.value);
  };
  return (
    <div className="w-screen h-screen flex flex-row">
      <NavBar />
      <div className="w-screen lg:w-4/5 h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
        <div className="w-3/5 h-1/3">
          <TextArea
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
