"use client";

import Button from "../button";
import Input from "../input";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addToDatabaseAction } from "@/actions/products.action";
import { renderFetchLanguage } from "../../actions/new-render-language";

export const formSchema = z.object({
  name: z.string(),
  stars: z.number().min(1).max(5),
});

export default function FormProducts() {
  const { register, reset, handleSubmit } = useForm<z.infer<typeof formSchema>>(
    {
      resolver: zodResolver(formSchema),
    }
  );

  const actionIncludeProducts = async (data: FormData) => {
    const name = data.get("name")?.toString();
    const stars = Number(data.get("stars"));

    const newProduct: ProductsTypeFetch = {
      name: name === undefined ? "" : name,
      stars,
    };

    const response = await addToDatabaseAction(newProduct);

    await renderFetchLanguage(response?.success);

    reset();
  };

  // const actionIncludeProducts = async (values: z.infer<typeof formSchema>) => {
  //   const { name, stars } = values;

  //   const newProduct: ProductsTypeFetch = {
  //     name,
  //     stars,
  //   };

  //   console.log(newProduct);

  //   const response = await addToDatabaseAction(newProduct);

  //   console.log(response);
  //   await renderFetchLanguage(response?.success);

  //   reset();
  // };

  return (
    <>
      <form
        action={actionIncludeProducts}
        className="mb-[20px] flex justify-center items-center flex-row gap-4"
        // onSubmit={handleSubmit(actionIncludeProducts)}
      >
        <Input
          placeholder="Digite o Produto"
          type="text"
          {...register("name")}
        />
        <Input
          placeholder="Digite o Valor do Produto"
          type="number"
          {...register("stars")}
        />
        <Button type="submit" title="Adicionar" />
      </form>
      <ul>
        <li></li>
      </ul>
    </>
  );
}

export type ProductsTypeFetch = {
  id?: number;
  name: string;
  stars: number;
  createdAt?: string;
};
