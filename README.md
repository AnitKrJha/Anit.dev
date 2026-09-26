# anit.dev

Personal site and blog of Anit Jha, built with [Astro](https://astro.build) and Tailwind CSS and deployed as a static site on Vercel.

## Commands

| Command | What it does |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the dev server at http://localhost:4321 |
| `pnpm build` | Build the static site into `.vercel/output/static` |
| `pnpm preview` | Serve the production build locally |
| `node createPost.js` | Scaffold a new blog post or project |

The project `.npmrc` points to the public npm registry (`registry.npmjs.org`), which is what Vercel uses. If the public registry is blocked on your network, pass a mirror on the command line instead of editing `.npmrc`, for example `npm_config_registry=https://your-mirror pnpm install`.

## Where things live

| What | Where |
| --- | --- |
| Name, role, bio facts, socials, experience, toolbox | `src/lib/site.ts` |
| Blog posts | `src/content/blog/*.mdx` |
| Projects | `src/content/projects/*.mdx` (schema in `src/content/config.ts`) |
| Design tokens, aurora, prose styles | `src/styles/global.css` |
| SEO: title, description, canonical, Open Graph, JSON-LD | `src/Layouts/BaseLayout.astro` |
| Icons (inline SVG, no network at build time) | `src/components/Icon.astro` |

Set `isDraft: true` on a post or project to keep it out of lists, the sitemap and the RSS feed. The page is still built with `noindex`, so you can share the link.

## Design

The design direction, tokens and rules are in [`DESIGN.md`](DESIGN.md), and the audience and tone are in [`PRODUCT.md`](PRODUCT.md).

## SEO

- A unique title, description and canonical URL on every page
- Open Graph and Twitter cards. Posts and projects use their cover image, and other pages use `og.anit.dev`.
- JSON-LD: `ProfilePage` + `Person` on the home page, `BlogPosting` and `CreativeWork` with breadcrumbs on detail pages
- `sitemap-index.xml` (drafts excluded), `rss.xml`, and `robots.txt`
