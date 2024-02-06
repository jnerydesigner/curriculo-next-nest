import { z } from 'zod';

export const CreateHabilityDTO = z.object({
  name: z.string().min(3).max(255),
  userId: z.string().min(3).max(255),
  value: z.number().min(1).max(100),
});

export type CreateHabilityType = z.infer<typeof CreateHabilityDTO>;
