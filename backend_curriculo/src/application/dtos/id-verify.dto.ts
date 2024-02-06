import { z } from 'zod';

export const IdVerifyDTO = z.string().uuid();

export type IdVerifyType = z.infer<typeof IdVerifyDTO>;
