import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

// TODO: Replace with Lamna domain when received
// https://astro.build/config
export default defineConfig({
  base: "/",
  integrations: [vue(), tailwind()],
  server: {
    port: 3000,
    host: true,
  },
  site: "https://lamna-app.github.io",
});
