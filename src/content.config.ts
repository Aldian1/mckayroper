import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			// URLs (http/https or / from public) use img tag; local paths use image() for optimization
			heroImage: z
				.union([
					z.string().refine((s) => s.startsWith('http') || s.startsWith('/')),
					image(),
				])
				.optional(),
		}),
});

export const collections = { blog };
