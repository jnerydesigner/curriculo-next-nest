"use server";

import {
  ProductsTypeFetch,
  formSchema,
} from "@/app/admin/components/forms/form-products";
import { ProductsType } from "@/app/admin/components/table-products";
import axios from "axios";

const userId = "947aa786-6a48-4994-bd3c-daf4fdeb931c";

export async function addToDatabaseAction(dataAction: ProductsTypeFetch) {
  if (!dataAction) return;

  try {
    const response = await fetch(
      `http://localhost:3000/v1/curriculo/languages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...dataAction,
          userId,
        }),
        next: {
          tags: ["curriculo"],
        },
      }
    );



    return {
      success: true,
      data: {
        name: dataAction.name,
        stars: dataAction.stars,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
