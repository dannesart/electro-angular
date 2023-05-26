import { z } from 'zod';

const MenuSchema = z.object({
  id: z.string(),
  required: z.boolean(),
  type: z.string(),
  description: z.string(),
  name: z.string(),
  value: z.object({
    value: z.string(),
    label: z.string(),
    target: z.string(),
    type: z.string(),
  }),
  example: z.string(),
});

type Menu = z.infer<typeof MenuSchema>;

export { Menu, MenuSchema };
