"use server";
import { z } from "zod";
import axios from "axios";
import { LanguageSchema } from "@/schemas";
import { revalidateTag, revalidatePath } from "next/cache";

export type FormData = z.infer<typeof LanguageSchema>;

const userId = "947aa786-6a48-4994-bd3c-daf4fdeb931c";

export async function languageAction(formData: FormData) {
  const newData = {
    name: formData.name,
    stars: Number(formData.stars),
    userId,
  };

  const response = await fetch("http://localhost:3000/v1/curriculo/languages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });

  const data = await response.json();

  revalidateTag("languages");
  revalidatePath("/");

  return data;
}
