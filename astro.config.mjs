// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://parallel.works',
  output: 'static',
  integrations: [],
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