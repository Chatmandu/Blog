import { getCollection } from 'astro:content';

export async function GET(context) {
  const site = context.site ?? 'https://manualmode.xyz';
  const posts = await getCollection('posts');

  const today = new Date().toISOString().split('T')[0];

  // Static pages
  const staticPages = [
    { url: new URL('/', site).href, priority: '1.0', changefreq: 'weekly' },
    { url: new URL('/about/', site).href, priority: '0.5', changefreq: 'monthly' },
  ];

  // Blog posts
  const postPages = posts.map((post) => ({
    url: new URL(`/blog/${post.slug}/`, site).href,
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: post.data.updatedDate
      ? new Date(post.data.updatedDate).toISOString().split('T')[0]
      : new Date(post.data.pubDate).toISOString().split('T')[0],
  }));

  const allPages = [...staticPages, ...postPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod ?? today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
