// @ts-check
import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ginodnb.com',
  integrations: [solidJs(), tailwind(), sitemap()],
  adapter: netlify({
    edgeMiddleware: false,
  }),
  compressHTML: !import.meta.env.DEV,
  // Use server output so API routes (serverless functions) work during local development
  // and with adapters that support server runtime (Vercel/Netlify).
  output: 'server',
  build: {
    assets: "assets",
  },
});