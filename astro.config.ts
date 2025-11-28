// @ts-check
import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ginodnb.com',
  integrations: [solidJs(), tailwind(), sitemap()],
  adapter: netlify(),
  compressHTML: !import.meta.env.DEV,
  // Enable SSR for Netlify
  output: 'server',
  build: {
    assets: "assets",
  },
});