"use server";

import { db } from "@/server/index";
import { therace } from "../schema";
import { revalidatePath } from "next/cache";

export default async function createLesson(formData: FormData) {
  //   console.log(formData);
  const title = formData.get("title")?.toString();

  if (!title) {
    return { error: "Title is required" };
  }

  revalidatePath("/");

  const data = await db.insert(therace).values({
    title: title,
  });
  console.log(data);
  //   return { success: data };
}
