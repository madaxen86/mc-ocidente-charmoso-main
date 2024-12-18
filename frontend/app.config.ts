import { defineConfig } from '@solidjs/start/config';

export default defineConfig({
  ssr: true,

  server: {
    prerender: {
      crawlLinks: false,
    },
    compatibilityDate: '2024-11-24',
  },
});
