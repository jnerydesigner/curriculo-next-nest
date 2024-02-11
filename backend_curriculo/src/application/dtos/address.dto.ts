import { z } from 'zod';

export const CreateAddressDTO = z.object({
  street: z.string().min(3).max(255),
  number: z.string().min(1).max(255),
  district: z.string().min(3).max(255),
  city: z.string().min(3).max(255),
  state: z.string().min(2).max(255),
  country: z.string().min(3).max(255),
  zipcode: z.string().min(5).max(255),
  userId: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const UpdateAddressDTO = z.object({
  street: z.string().min(3).max(255).optional(),
  number: z.string().min(1).max(255).optional(),
  district: z.string().min(3).max(255).optional(),
  city: z.string().min(3).max(255).optional(),
  state: z.string().min(2).max(255).optional(),
  country: z.string().min(3).max(255).optional(),
  zipcode: z.string().min(5).max(255).optional(),
  userId: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export type AddressType = z.infer<typeof CreateAddressDTO>;
export type AddressIdType = AddressType & { id?: string };
