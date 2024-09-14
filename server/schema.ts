import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const therace = pgTable("therace", {
  id: serial("id").primaryKey().notNull(),
  title: text("title").notNull(),
});
