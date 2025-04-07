import { createDeepSeek } from "@ai-sdk/deepseek";
import { streamText } from "ai";
import { auth } from "@clerk/nextjs/server";
import { createMessage } from "@/db";
// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const deepseek = createDeepSeek({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: process.env.BASE_URL,
});
export async function POST(req: Request) {
  const { messages, model, chat_id, chat_user_id } = await req.json();
  const { userId } = await auth();

  if (!userId || userId !== chat_user_id) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }
  //存用户信息
  const lastMessage = messages[messages.length - 1];

  await createMessage({
    chat_id,
    content: lastMessage.content,
    role: lastMessage.role,
  });
  const result = streamText({
    model: deepseek(model),
    system: "You are a helpful assistant.",
    messages,
    onFinish: async (result) => {
        console.log(result,1)
      await createMessage({
        chat_id,
        content: result.text,
        role: "assistant",
      });
    },
  });

  return result.toDataStreamResponse();
}
