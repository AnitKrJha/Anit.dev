import { getCollection } from "astro:content";

/** Published posts, newest first. */
export async function getPosts() {
    return (await getCollection("blog", ({ data }) => !data.isDraft)).sort(
        (a, b) => b.data.date.getTime() - a.data.date.getTime()
    );
}

/** Published projects in display order. */
export async function getProjects() {
    return (await getCollection("projects", ({ data }) => !data.isDraft)).sort(
        (a, b) => a.data.order - b.data.order || (b.data.year ?? 0) - (a.data.year ?? 0)
    );
}
