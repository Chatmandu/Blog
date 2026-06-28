import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

// Posts to surface in the lead section, in order. Everything not listed here
// is still included automatically under "More writing", sorted newest first.
// Optional — leave empty and the whole file still generates correctly.
const FEATURED_SLUGS = [
  'why-your-content-isnt-showing-up-in-ai-search-and-how-to-fix-it',
  'the-researcher-ai-cant-see-and-how-to-fix-it',
  'faqs-from-content-design-sin-to-ai-citation-strategy',
  'building-for-the-visitors-wholl-never-visit',
  'interest-media-discoverability-over-followership-curiosity-over-hierarchy',
];

const INTRO =
  'Writing by Niall Walsh: essays on marketing, technology, and AI, and the ' +
  'places where they collide with culture, communication, and how organisations ' +
  'actually work. Niall is a communications and digital strategist with 20+ years ' +
  'across local government and higher education, currently Director of Marketing at ' +
  'the Liverpool School of Tropical Medicine. The recurring theme: the gap between ' +
  'how something appears and what is actually happening, and what it takes to do the ' +
  'hard, honest version of the work.';

// Strip wrapping straight/curly quotes and collapse whitespace.
function clean(s: string): string {
  return (s ?? '')
    .replace(/\s+/g, ' ')
    .replace(/^["“”']+/, '')
    .replace(/["“”']+$/, '')
    .trim();
}

export async function GET(context: APIContext) {
  const site = context.site?.href ?? 'https://manualmode.xyz/';

  const posts = (await getCollection('posts', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const notes = (await getCollection('notes', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const line = (slug: string, title: string, desc: string) =>
    `- [${clean(title)}](${new URL(`/blog/${slug}/`, site).href})` +
    (desc ? `: ${clean(desc)}` : '');

  const featured = FEATURED_SLUGS.map((s) => posts.find((p) => p.slug === s)).filter(
    (p): p is (typeof posts)[number] => Boolean(p)
  );
  const featuredSet = new Set(featured.map((p) => p.slug));
  const rest = posts.filter((p) => !featuredSet.has(p.slug));

  const sections: string[] = [`# Niall Walsh — manualmode.xyz`, ``, `> ${INTRO}`];

  if (featured.length) {
    sections.push(``, `## AI search and visibility (start here)`, ``);
    sections.push(...featured.map((p) => line(p.slug, p.data.title, p.data.description)));
  }

  if (rest.length) {
    sections.push(``, `## More writing`, ``);
    sections.push(...rest.map((p) => line(p.slug, p.data.title, p.data.description)));
  }

  if (notes.length) {
    sections.push(``, `## Notes`, ``);
    sections.push(
      ...notes.map(
        (n) => `- [${clean(n.data.title)}](${new URL(`/notes/${n.slug}/`, site).href})`
      )
    );
  }

  sections.push(
    ``,
    `## About`,
    ``,
    `- [About Niall Walsh](${new URL('/about/', site).href}): Who Niall is, what he writes about, and why the site is called manual mode.`,
    ``
  );

  return new Response(sections.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
