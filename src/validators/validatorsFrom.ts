import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(6),
  price: z.number().min(0),
  quantity: z.number().min(1),
  description: z.string().optional(),
  images: z.any(),
  brand: z.string(),
});

export const CategorySchema = z.object({
  name: z.string().min(3),
});
