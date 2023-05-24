import { z, defineCollection, reference } from "astro:content";

const docs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    framework: z.string(),
    image: z.string().optional(),
    draft: z.boolean(),
    publishDate: z.date(),
    author: reference("authors"),
  }),
});

const authors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
  }),
});

export const collections = {
  docs,
  authors,
};
