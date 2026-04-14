import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://manualmode.xyz',
  output: 'static',
  integrations: [
    sitemap({
      serialize(item) {
        return {
          ...item,
          changefreq: 'weekly',
          priority: item.url.includes('/blog/') ? 0.8 : 0.7,
          lastmod: new Date().toISOString(),
        };
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
