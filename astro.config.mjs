import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://manualmode.xyz',
  output: 'static',
  integrations: [],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
