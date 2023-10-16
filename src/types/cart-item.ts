import { z } from 'zod';

export const CartItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.coerce.number(),
  quantity: z.number().optional()
});

export type CartItem = z.infer<typeof CartItemSchema>;
