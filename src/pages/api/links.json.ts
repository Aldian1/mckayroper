import { SITE_TITLE, SITE_DESCRIPTION } from '../../consts';

export async function GET({ site }: { site: URL }) {
	const base = site.toString().replace(/\/$/, '');
	const links = [
		{ rel: 'home', href: `${base}/` },
		{ rel: 'about', href: `${base}/about/` },
		{ rel: 'blog', href: `${base}/blog/` },
		{ rel: 'rss', href: `${base}/rss.xml` },
		{ rel: 'posts-json', href: `${base}/posts.json` },
		{ rel: 'sitemap', href: `${base}/sitemap-index.xml` },
		{ rel: 'humans', href: `${base}/humans.txt` },
		{ rel: 'robots', href: `${base}/robots.txt` },
	];
	return new Response(JSON.stringify({
		site: {
			title: SITE_TITLE,
			description: SITE_DESCRIPTION,
			url: base,
		},
		links,
	}), {
		headers: {
			'content-type': 'application/json; charset=utf-8',
			'cache-control': 'public, max-age=3600',
		},
	});
}
