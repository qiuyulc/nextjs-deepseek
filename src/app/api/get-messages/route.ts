import { getMessagesByChatId } from "@/db";
import { auth } from "@clerk/nextjs/server";
export async function POST(req: Request) {
  const { chat_id, chat_user_id } = await req.json();
  const { userId } = await auth();

  if (!userId || chat_user_id !== userId) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  if (userId) {
    const messages = await getMessagesByChatId(chat_id);
    return new Response(JSON.stringify(messages), { status: 200 });
  }

  return new Response(null, { status: 401 });
}
