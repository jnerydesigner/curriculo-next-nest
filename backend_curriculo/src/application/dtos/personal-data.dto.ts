import { z } from 'zod';

export const CreatePersonalDataDTO = z.object({
  fullname: z.string().min(3).max(255),
  document: z.string().min(3).max(255),
  birthday: z.coerce.date(),
  avatarUrl: z.string().min(3).max(255).optional(),
  userId: z.string().min(3).max(255),
  profession: z.string().min(3).max(255).optional(),
});

export const UpdatePersonalDataDTO = z.object({
  fullname: z.string().min(3).max(255).optional(),
  document: z.string().min(3).max(255).optional(),
  birthday: z.coerce.date().optional(),
  avatarUrl: z.string().min(3).max(255).optional(),
  userId: z.string().min(3).max(255).optional(),
  profession: z.string().min(3).max(255).optional(),
  nickname: z.string().min(3).max(255).optional(),
});

export type PersonalDataType = z.infer<typeof CreatePersonalDataDTO>;
export type PersonalDataIdType = PersonalDataType & { id?: string };
