import { useState } from "react";
import { useCompletion } from "ai/react";

interface UseChatProps {
  api: string;
  body?: {
    model?: string;
    [key: string]: any;
  };
}

export function useChat({ api, body }: UseChatProps) {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");

  const { complete, completion, isLoading } = useCompletion({
    api,
    body,
    onFinish: (prompt, completion) => {
      setMessages((prev) => [
        ...prev,
        { role: "user", content: prompt },
        { role: "assistant", content: completion },
      ]);
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");
    await complete(input);
  };

  return {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    completion,
    isLoading,
  };
} 