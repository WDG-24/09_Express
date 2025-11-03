import { optional, z } from 'zod';

export const userInputSchema = z
  .object({
    firstName: z
      .string({ error: 'firstName must be a string' })
      .min(2, { message: 'firstName must be at least 2 chars long' }),

    lastName: z
      .string({ error: 'lastName must be a string' })
      .min(2, { message: 'lastName must be at least 2 chars long' }),

    email: z
      .string({ error: 'email must me a string' })
      .email({ message: 'email must be a valid email address' }),
  })
  .strict();

export const postInputSchema = z
  .object({
    title: z
      .string({ error: 'title must be a string' })
      .min(5, { message: 'title must be at least 5 characters long' }),

    content: z
      .string({ error: 'Content must be a string' })
      .min(5, { message: 'content must be at least 5 characters long' }),

    author: z
      .string({ error: 'Author must be a string' })
      .min(24, { message: 'author (userId) is required' }),

    // image_url: z.url().optional(), // uplad single
    image_url: z.array(z.string()).optional(), // multiple
  })
  .strict();
