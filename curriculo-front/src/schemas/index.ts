import { z } from "zod";

const LanguageSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Texto não pode ter menos de 3 caracters" })
    .max(255),
  stars: z.coerce.number(),
});

export { LanguageSchema };
