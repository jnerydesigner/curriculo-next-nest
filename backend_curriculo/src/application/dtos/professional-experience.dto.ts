import { z } from 'zod';

export const CreateProfessionalExperienceDescriptionDTO = z.object({
  description: z.string().min(3).max(255),
  userId: z.string().min(3).max(255),
  professionalExperiencesId: z.string().min(3).max(255),
});

export const CreateProfessionalExperienceDTO = z.object({
  title: z.string().min(3).max(255),
  company: z.string().min(3).max(255),
  dateInit: z.coerce.date(),
  dateEnd: z.coerce.date().optional(),
  isActualJob: z.boolean(),
  userId: z.string().min(3).max(255),
  description: z.array(CreateProfessionalExperienceDescriptionDTO),
});

export const UpdateProfessionalExperienceDescriptionDTO = z.object({
  id: z.string().min(3).max(255),
  description: z.string().min(3).max(255).optional(),
  userId: z.string().min(3).max(255),
  professionalExperiencesId: z.string().min(3).max(255),
});

export const UpdateProfessionalExperienceDTO = z.object({
  id: z.string().min(3).max(255),
  title: z.string().min(3).max(255).optional(),
  company: z.string().min(3).max(255).optional(),
  dateInit: z.coerce.date(),
  dateEnd: z.coerce.date().optional(),
  isActualJob: z.boolean(),
  userId: z.string().min(3).max(255),
  description: z.array(UpdateProfessionalExperienceDescriptionDTO),
});

export type ProfessionalExperienceType = z.infer<
  typeof CreateProfessionalExperienceDTO
>;

export type ProfessionalExperienceDescriptionWithIdType = z.infer<
  typeof UpdateProfessionalExperienceDTO
>;

export type ProfessionalExperienceDescriptionType = z.infer<
  typeof CreateProfessionalExperienceDescriptionDTO
>;

export type ProfessionalExperienceDescriptionUpdateType = z.infer<
  typeof UpdateProfessionalExperienceDescriptionDTO
>;
