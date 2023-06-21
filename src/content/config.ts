// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
export const docsSchema = z.object({
  title: z.string().optional(),
  tocDepth: z.number().optional(),
  excerpt: z.string().optional()
});
export const docsCollection = defineCollection({
    schema: docsSchema
});
/*const changelogCollection = defineCollection({});
const blogCollection = defineCollection({});
*/
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    docs: docsCollection,
    //changelog: changelogCollection,
    //blog: blogCollection
};
