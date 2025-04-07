import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { eq, and, desc,asc } from "drizzle-orm";
import { chatsTable, messagesTable } from "./schema";
const client = postgres(process.env.DATABASE_URL!);
const db = drizzle({ client });

export const createChat = async ({
    title,
    userId,
    model,
  }: {
    title: string;
    userId: string;
    model: string;
  }) => {
    try {
      const [newChat] = await db
        .insert(chatsTable)
        .values({ title, userId, model })
        .returning();
      return newChat;
    } catch (err) {
      console.log("error", err);
      return null;
    }
  };
  
  export const getChat = async ({
    chatId,
    userId,
  }: {
    chatId: number;
    userId: string;
  }) => {
    try {
      const chat = await db
        .select()
        .from(chatsTable)
        .where(and(eq(chatsTable.id, chatId), eq(chatsTable.userId, userId)));
      if (chat.length == 0) {
        return null;
      }
      return chat[0];
    } catch (err) {
      console.log("error", err);
      return null;
    }
  };

  export const getChats = async (userId: string) => {
    try {
      const chats = await db
        .select()
        .from(chatsTable)
        .where(eq(chatsTable.userId, userId))
        .orderBy(desc(chatsTable.id));
      return chats;
    } catch (err) {
      console.log("error", err);
      return null;
    }
  };

  export const createMessage = async ({
    chat_id,
    content,
    role,
  }: {
    chat_id: number;
    content: string;
    role: string;
  }) => {
    try {
      const [newMessage] = await db
        .insert(messagesTable)
        .values({
          content,
          chatId: chat_id,
          role,
        })
        .returning();
      return newMessage;
    } catch (err) {
      console.log("error", err);
      return null;
    }
  };
  
  export const getMessagesByChatId = async (chatId: number) => {
    try {
      const messages = await db
        .select()
        .from(messagesTable)
        .where(eq(messagesTable.chatId, chatId)).orderBy(asc(messagesTable.id));
      return messages;
    } catch (err) {
      console.log("error", err);
      return null;
    }
  };
  