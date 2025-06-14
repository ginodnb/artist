// @ts-check
import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ginodnb.com',
  integrations: [solidJs(), tailwind(), sitemap()],
  compressHTML: !import.meta.env.DEV,
  output: 'static',
  build: {
    assets: "assets",
  },
});