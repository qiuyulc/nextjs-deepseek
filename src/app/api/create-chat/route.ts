import { createChat } from "@/db";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  const { title, model } = await request.json();
  const { userId } = await auth();

  if (userId) {
    const chat = await createChat({ userId, title, model });

    return new Response(JSON.stringify({ id: chat?.id }), { status: 200 });
  }
}
