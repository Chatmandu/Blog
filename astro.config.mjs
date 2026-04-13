import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://manualmode.xyz',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
