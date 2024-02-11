import { z } from 'zod';

export const CreateLanguagesDTO = z.object({
  name: z.string().min(3).max(255),
  stars: z.number().min(1).max(5),
  userId: z.string().min(3).max(255),
});

export const UpdateLanguagesDTO = z.object({
  name: z.string().min(3).max(255).optional(),
  stars: z.number().min(1).max(5).optional(),
});

export type LanguagesType = z.infer<typeof CreateLanguagesDTO>;
export type LanguagesIdType = LanguagesType & { id?: string; slug?: string };
