import { z } from 'zod';

export const UserCreateDTO = z.object({
  email: z.string().min(3).max(255),
  name: z.string().min(3).max(255),
  password: z.string().min(3).max(255),
});

export type UserCreateType = z.infer<typeof UserCreateDTO>;
