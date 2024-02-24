import * as z from "zod";
import { formSchema } from "./form-products";

export async function addToDatabase(data: z.infer<typeof formSchema>) {
  console.log(data);
}
