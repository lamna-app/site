import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind()],
  server: {
    port: 3000,
    host: true,
  },
});
