import { getCollection } from 'astro:content';

export async function GET() {
	const posts = (await getCollection('blog'))
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.map((post) => ({
			id: post.id,
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			updatedDate: post.data.updatedDate ?? null,
			url: `/blog/${post.id}/`,
		}));

	return new Response(JSON.stringify({ posts }), {
		headers: {
			'content-type': 'application/json; charset=utf-8',
			'cache-control': 'public, max-age=3600',
		},
	});
}
