import { z } from 'zod';

export const CreateSocialMediaDTO = z.object({
  name: z.string().min(3).max(255),
  slug: z.string().min(3).max(255).optional(),
  contactId: z.string().min(3).max(255),
  url: z.string().min(3).max(255),
});

export const UpdateSocialMediaDTO = z.object({
  name: z.string().min(3).max(255).optional(),
  slug: z.string().min(3).max(255).optional(),
  contactId: z.string().min(3).max(255).optional(),
  url: z.string().min(3).max(255).optional(),
});

export type SocialMediaType = z.infer<typeof CreateSocialMediaDTO>;
export type SocialMediaIdType = SocialMediaType & { id?: string };
