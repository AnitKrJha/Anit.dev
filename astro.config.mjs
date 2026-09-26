import { defineConfig } from "astro/config";
import { readdirSync, readFileSync } from "node:fs";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const SITE = "https://anit.dev";

// Draft posts are still built (so they can be shared by link) but are kept out of the sitemap.
// Content collections aren't available here, so read the frontmatter directly.
function draftBlogPaths() {
  const dir = new URL("./src/content/blog/", import.meta.url);
  return readdirSync(dir)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => readFileSync(new URL(file, dir), "utf8"))
    .filter((src) => /^isDraft:\s*true\s*$/m.test(src))
    .map((src) => src.match(/^slug:\s*["']?([^"'\n]+?)["']?\s*$/m)?.[1])
    .filter(Boolean)
    .map((slug) => `${SITE}/blog/${slug}/`);
}
const drafts = new Set(draftBlogPaths());

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: SITE,
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  image: {
    domains: ["dev-to-uploads.s3.amazonaws.com", "og.anit.dev"],
  },
  markdown: {
    // Code follows the page theme; the dark variant is switched on by `.dark` in global.css.
    shikiConfig: { experimentalThemes: { light: "github-light", dark: "github-dark-dimmed" }, wrap: false },
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          test: ["h2", "h3", "h4"],
          properties: { className: ["heading-anchor"], ariaHidden: "true", tabIndex: -1 },
          content: { type: "text", value: "#" },
        },
      ],
    ],
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !drafts.has(page) && !page.endsWith("/404/"),
      // Match the canonical URLs (no trailing slash) used in <link rel="canonical">.
      serialize: (item) => ({ ...item, url: item.url === `${SITE}/` ? item.url : item.url.replace(/\/$/, "") }),
    }),
    mdx(),
    partytown({ config: { forward: ["dataLayer.push"] } }),
  ],
  adapter: vercel({
    analytics: true,
  }),
});
