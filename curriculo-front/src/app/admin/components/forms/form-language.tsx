"use client";

import { handleSubmit as handleFormActionSubmit } from "../../actions/add-stars-action";
import Button from "../button";
import Input from "../input";

import * as z from "zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { revalidatePath } from "next/cache";

export const formSchema = z.object({
  name: z.string(),
  stars: z.number().min(1).max(5),
});

export default function FormLanguage() {
  const ref = useRef<HTMLFormElement>(null);
  const { register, handleSubmit } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <form
      className="w-[100%] h-[100px] mb-[20px] p-2 flex justify-center items-center flex-row gap-4"
      ref={ref}
      action={async (formData: FormData) => {
        await handleFormActionSubmit(formData);
        ref.current?.reset();
      }}
    >
      <Input placeholder="Digite o Idioma" type="text" {...register("name")} />
      <Input
        placeholder="Digite a Quantidade de Estrelas"
        type="number"
        {...register("stars")}
      />
      <Button type="submit" title="Adicionar" />
    </form>
  );
}
