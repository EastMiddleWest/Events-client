import { z } from 'zod';

const email = z
  .string()
  .min(1, 'Required')
  .email('Wrong email');

  export const VariantsEnum = z.enum(['Social media' , 'Friends' , 'Found myself']);
  export type FishEnum = z.infer<typeof VariantsEnum>;

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(1, 'Required')
      .regex(/^[A-ZА-Я]/, 'Ім`я має починатись з великої літери')
      .min(4, 'мінімум 4 символи')
      .max(20, 'максимум 20 символів'),
    email: email,
    dateOfBirth: z.coerce.string().date(),
    source: VariantsEnum
  })

export type RegisterValues = z.infer<typeof registerSchema>;
