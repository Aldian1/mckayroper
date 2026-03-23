import { getCollection } from 'astro:content';

export async function GET() {
	const posts = (await getCollection('blog'))
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.map((post) => ({
			id: post.id,
			slug: post.data.slug,
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			updatedDate: post.data.updatedDate ?? null,
			url: `/blog/${post.data.slug}/`,
		}));

	return new Response(JSON.stringify({ posts }), {
		headers: {
			'content-type': 'application/json; charset=utf-8',
			'cache-control': 'public, max-age=3600',
		},
	});
}
