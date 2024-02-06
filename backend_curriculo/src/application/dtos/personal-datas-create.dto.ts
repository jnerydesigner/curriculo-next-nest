import { z } from 'zod';

export const PersonalDatasCreateDTO = z.object({
  fullname: z.string().min(3).max(255),
  phone: z.string().min(3).max(255),
  email: z.string().min(3).max(255),
});

export type PersonalDatasCreateType = z.infer<typeof PersonalDatasCreateDTO>;
