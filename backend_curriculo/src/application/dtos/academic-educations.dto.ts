import { z } from 'zod';

export const CreateAcademicEducationDTO = z.object({
  title: z.string(),
  university: z.string(),
  description: z.string(),
  dateInit: z.coerce.date(),
  dateEnd: z.coerce.date(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const UpdateAcademicEducationDTO = z.object({
  title: z.string().optional(),
  university: z.string().optional(),
  description: z.string().optional(),
  dateInit: z.coerce.date().optional(),
  dateEnd: z.coerce.date().optional(),
  userId: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export type AcademicType = z.infer<typeof CreateAcademicEducationDTO>;
export type AcademicIdType = AcademicType & { id?: string };
