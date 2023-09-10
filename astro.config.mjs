import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: [
      "dev-to-uploads.s3.amazonaws.com",
      "https://dev-to-uploads.s3.amazonaws.com/",
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/psxvdn3z7a17rof1xn0j.png",
      "og.anit.dev",
    ],
  },
  site: "https://anit-dev.vercel.app",
  integrations: [tailwind(), sitemap(), mdx()],
});
