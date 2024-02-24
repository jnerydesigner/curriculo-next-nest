"use server";

import { revalidateTag, revalidatePath } from "next/cache";

export async function handleSubmit(form: FormData) {
  const userId = "6e31accd-1054-4cd4-ab34-f8d56da8e172";

  const data = {
    name: form.get("name"),
    stars: Number(form.get("stars")),
    userId,
  };

  if (data.name === null || data.stars === null) {
    return;
  }

  await fetch("http://localhost:3000/v1/curriculo/languages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  revalidateTag("curriculo");
  revalidatePath("/");
}
