import { z } from 'zod';

export const CreateContactDTO = z.object({
  name: z.string().min(3).max(255),
  phone: z.string().min(3).max(255),
  isWhatsapp: z.boolean(),
  userId: z.string().min(3).max(255),
});

export type CreateContactType = z.infer<typeof CreateContactDTO>;
export type ContactWithIDType = CreateContactType & { id?: string };
