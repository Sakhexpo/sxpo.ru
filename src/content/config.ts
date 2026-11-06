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
    included: z.array(z.string()).default([]),
    notIncluded: z.array(z.string()).default([]),
    imageSrcset: z.string().optional(),
    category: z.string().default('Китай'),
    oldPath: z.string().optional(),
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

const pages = defineCollection({
  type: 'data',
  schema: z.object({
    pageTitle: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    heroEyebrow: z.string().optional(),
    heroTitle: z.string().optional(),
    heroDescription: z.string().optional(),
    heroImage: z.string().optional(),
    heroButton: z.string().optional(),
    heroCaptionTitle: z.string().optional(),
    heroCaptionText: z.string().optional(),
    featuredTitle: z.string().optional(),
    featuredDescription: z.string().optional(),
    featuredEyebrow: z.string().optional(),
    directionsTitle: z.string().optional(),
    directionsDescription: z.string().optional(),
    directionsEyebrow: z.string().optional(),
    aboutEyebrow: z.string().optional(),
    aboutTitle: z.string().optional(),
    aboutText: z.string().optional(),
    galleryPhotosTitle: z.string().optional(),
    galleryPhotosEyebrow: z.string().optional(),
    galleryVideosTitle: z.string().optional(),
    galleryVideosEyebrow: z.string().optional(),
    contactEyebrow: z.string().optional(),
    contactTitle: z.string().optional(),
    contactText: z.string().optional(),
    contactButton: z.string().optional(),
    trustItems: z.array(z.object({ title: z.string(), text: z.string() })).optional(),
    directions: z.array(z.object({ title: z.string(), text: z.string() })).optional(),
    values: z.array(z.object({ title: z.string(), text: z.string() })).optional(),
    journeyTitle: z.string().optional(),
    journeyText: z.string().optional(),
    valuesEyebrow: z.string().optional(),
    valuesTitle: z.string().optional(),
    journeyEyebrow: z.string().optional(),
    checklistTitle: z.string().optional(),
    checklistItems: z.array(z.string()).optional(),
    companyTitle: z.string().optional(),
    companyDescription: z.string().optional(),
    officeEyebrow: z.string().optional(),
    officeTitle: z.string().optional(),
  }),
});

const settings = defineCollection({
  type: 'data',
  schema: z.object({
    phone: z.string(),
    maxUrl: z.string().url(),
    whatsAppNumber: z.string(),
    address: z.string(),
    ogrn: z.string(),
    inn: z.string(),
    kpp: z.string(),
    tourOperatorNumber: z.string(),
    footerDescription: z.string(),
  }),
});

export const collections = { tours, videos, photos, pages, settings };
