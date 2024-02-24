"use server";

import {
  ProductsTypeFetch,
  formSchema,
} from "@/app/admin/components/forms/form-products";
import { ProductsType } from "@/app/admin/components/table-products";
import axios from "axios";

const userId = "6e31accd-1054-4cd4-ab34-f8d56da8e172";

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

    console.log(response);

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
