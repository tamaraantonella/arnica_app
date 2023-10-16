import { z } from 'zod';

export const ItemFromDbSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.coerce.number(),
  category: z.string(),
  description: z.string().optional(),
  img: z.string().optional(),
  stock: z.coerce.number().default(0)
});

export type ItemFromDb = z.infer<typeof ItemFromDbSchema>;

