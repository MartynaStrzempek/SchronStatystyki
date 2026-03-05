import { z } from 'zod'

export const AnimalSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.enum(['kot', 'pies']),
  age: z.enum(['dorosły', 'młody', 'senior']),
  gender: z.enum(['samica', 'samiec']),
  size: z.enum(['mały', 'średni', 'duży']),
  description: z.string(),
  intakeDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // basic YYYY-MM-DD check
  status: z.enum(['do adopcji', 'w trakcie', 'adoptowany']),
  urgent: z.boolean(),
  featured: z.boolean(),
  photos: z.array(z.string()),
})

export const AnimalsSchema = z.array(AnimalSchema)

export type Animal = z.infer<typeof AnimalSchema>
