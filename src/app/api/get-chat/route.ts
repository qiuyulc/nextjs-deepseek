import { getChat } from "@/db";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
    const { chat_id } = await req.json();

  const { userId } = await auth();
  if(!userId){
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
      });
 }
 
  const chat = await getChat({chatId:chat_id,userId});
  return new Response(JSON.stringify(chat), {
    status: 200,
  })
}