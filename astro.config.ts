// @ts-check
import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
// NOTE: For the static-deploy branch we use static output to restore a previous static build

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ginodnb.com',
  integrations: [solidJs(), tailwind(), sitemap()],
  compressHTML: !import.meta.env.DEV,
  // Use static output to restore a prior (static) version of the site for the fallback deploy
  output: 'static',
  build: {
    assets: "assets",
  },
});