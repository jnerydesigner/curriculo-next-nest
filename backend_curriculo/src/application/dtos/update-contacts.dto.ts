import { z } from 'zod';

export const UpdateContactDTO = z.object({
  id: z.string().min(36).max(36),
  name: z.string().min(3).max(255).optional(),
  phone: z.string().min(3).max(255).optional(),
  isWhatsapp: z.boolean().optional(),
});

export type UpdateContactType = z.infer<typeof UpdateContactDTO>;
