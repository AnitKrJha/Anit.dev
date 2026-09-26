import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        isDraft: z.boolean(),
        description: z.string(),
        tags: z.array(z.string()),
        image: image().optional(),
        ogImage: z.string().optional(),
        date: z.string().transform((str) => new Date(str)),
    })
});

const projectCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        name: z.string(),
        isDraft: z.boolean(),
        description: z.string(),
        /** One-line summary shown in project lists. Falls back to `description`. */
        tagline: z.string().optional(),
        image: image().optional(),
        imageAlt: z.string().optional(),
        ghLink: z.string().url().optional(),
        liveLink: z.string().url().optional(),
        year: z.number().int().optional(),
        /** What I did on it, e.g. "Design & build". */
        role: z.string().optional(),
        tags: z.array(z.string()).default([]),
        /** Lower comes first. */
        order: z.number().default(100),
    })
});

export const collections = {
    'blog': blogCollection,
    'projects': projectCollection
};
