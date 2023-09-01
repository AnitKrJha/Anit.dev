// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// 2. Define your collection(s)
const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        isDraft: z.boolean(),
        description: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        date: z.string().transform((str) => new Date(str)),
    })
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'blog': blogCollection,
};