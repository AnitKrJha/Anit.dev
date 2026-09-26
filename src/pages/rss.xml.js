import rss from "@astrojs/rss";
import { getPosts } from "../lib/content";
import { person } from "../lib/site";

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: `${person.name}'s blog`,
    description: "Notes and guides on Git, terminals, Linux and developer tooling.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title.trim(),
      description: post.data.description,
      pubDate: post.data.date,
      categories: post.data.tags,
      link: `/blog/${post.slug}`,
    })),
    customData: "<language>en-us</language>",
    trailingSlash: false,
  });
}
