import { defineConfig } from "astro/config";
import bookshop from "@bookshop/astro-bookshop";
import purgecss from "astro-purgecss";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://top-quail.cloudvent.net/",
  integrations: [bookshop(), purgecss({ keyframes: false }), preact()],
  experimental: {
    viewTransitions: true,
  },
});
