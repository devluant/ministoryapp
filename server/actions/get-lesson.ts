"use server";

import { db } from "@/server/index";

export default async function getLesson() {
  const therace = await db.query.therace.findMany();
  if (!therace) return { error: "Lesson not found" };
  return { success: therace };
}
