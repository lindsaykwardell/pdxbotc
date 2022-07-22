import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";

import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [vue(), tailwind()],
});
