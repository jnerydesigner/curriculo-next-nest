"use server";

import { revalidateTag, revalidatePath } from "next/cache";

export async function handleSubmit(form: FormData) {
  const userId = "947aa786-6a48-4994-bd3c-daf4fdeb931c";

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
