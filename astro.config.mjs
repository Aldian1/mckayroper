// @ts-check

import mermaid from 'astro-mermaid';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://harrymckayroper.com',
	trailingSlash: 'always',
	integrations: [
		mermaid(), // Must come before mdx for markdown processing
		mdx(),
		sitemap(),
	],
});
