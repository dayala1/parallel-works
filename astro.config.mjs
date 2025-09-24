// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://parallelworks.tech',
  output: 'static',
  integrations: [sitemap()],
  redirects:{
    "": "/en"
  },
  i18n: {
      defaultLocale: 'en',
      locales: ['en', 'ja'],
      routing: {
          prefixDefaultLocale: false,
      },
	},

  prefetch: { defaultStrategy: 'viewport' },
  adapter: vercel(),
});