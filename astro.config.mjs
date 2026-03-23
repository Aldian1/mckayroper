// @ts-check

import mermaid from 'astro-mermaid';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const blogSlugRedirects = {
	'/blog/first-post/': '/blog/the-goal-is-space/',
	'/blog/second-post/': '/blog/the-goal-is-time-management/',
	'/blog/third-post/': '/blog/meditation-daily-practice-focus/',
	'/blog/fourth-post/': '/blog/founder-longevity-health-performance/',
	'/blog/fifth-post/': '/blog/digital-nomad-remote-work-travel/',
	'/blog/sixth-post/': '/blog/launch-ai-startup-vibe-coding/',
	'/blog/seventh-post/': '/blog/travel-shortcut-ambition/',
	'/blog/eighth-post/': '/blog/agentic-swarms-multi-agent-ai/',
	'/blog/ninth-post/': '/blog/openclaw-weekend-first-build/',
	'/blog/shipping-build-feedback-loop/': '/blog/openclaw-weekend-first-build/',
};

// https://astro.build/config
export default defineConfig({
	site: 'https://harrymckayroper.com',
	trailingSlash: 'always',
	redirects: Object.fromEntries(
		Object.entries(blogSlugRedirects).map(([from, destination]) => [
			from,
			{ status: 301, destination },
		]),
	),
	integrations: [
		mermaid(), // Must come before mdx for markdown processing
		mdx(),
		sitemap(),
	],
});
