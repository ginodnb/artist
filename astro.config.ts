// @ts-check
import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), tailwind()],
  compressHTML: !import.meta.env.DEV,
  output: 'static',
  build: {
    assets: "assets",
  },
});