import { serial, integer, pgTable, text } from "drizzle-orm/pg-core";

// export const usersTable = pgTable("users", {
//   id: integer().primaryKey().generatedAlwaysAsIdentity(),
//   name: varchar({ length: 255 }).notNull(),
//   age: integer().notNull(),
//   email: varchar({ length: 255 }).notNull().unique(),
// });

export const chatsTable = pgTable("chats", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  title: text('title').notNull(),
  model: text("modal").notNull(),
});

export const messagesTable = pgTable("messages", {
  id: serial("id").primaryKey(),
  chatId: integer("chat_id").references(() => chatsTable.id),
  role: text("role").notNull(),
  content: text("content").notNull(),
});

export type CharModel = typeof chatsTable.$inferInsert;
export type MessagesModel = typeof messagesTable.$inferInsert;