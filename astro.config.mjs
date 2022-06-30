import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa'

import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind()],
  vite: {
    plugins: [VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['/img/demon-head.png'],
      manifest: {
        name: 'Blood on the Clocktower | Unofficial Portland Group',
        short_name: 'PDXBOTC',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/img/demon-head.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    }),]
  }
});