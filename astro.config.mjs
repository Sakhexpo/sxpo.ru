import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { rehypeTourContent } from './src/lib/rehype-tour-content.ts';

export default defineConfig({
  site: 'https://sxpo.ru',
  integrations: [tailwind()],
  markdown: {
    rehypePlugins: [rehypeTourContent],
  },
  base: '/',
  trailingSlash: 'always',
});
