import { defineCollection, z } from 'astro:content';

const tours = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    destination: z.string(),
    duration: z.string(),
    priceFrom: z.number().optional(),
    priceLabel: z.string().optional(),
    schedule: z.string().optional(),
    images: z.array(z.string()).min(1),
    hotelGalleries: z.array(z.object({ name: z.string(), images: z.array(z.string()).min(1) })).default([]),
    imageSrcset: z.string().optional(),
    category: z.string().default('Китай'),
    oldPath: z.string(),
    featured: z.boolean().default(false),
    archived: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const videos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    youtubeId: z.string().optional(),
    vimeoId: z.string().optional(),
    draft: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const photos = defineCollection({
  type: 'content',
  schema: z.object({
    src: z.string(),
    title: z.string(),
    alt: z.string(),
    order: z.number().default(99),
  }),
});

export const collections = { tours, videos, photos };
