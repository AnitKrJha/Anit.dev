import { SITE_URL } from "./site";

/** Share cards are rendered by the og.anit.dev worker (github.com/AnitKrJha/OG). */
const OG_ENDPOINT = "https://og.anit.dev/og";

export type OgCard = {
    title: string;
    /** Small label on the card, e.g. "Blog" or "Project". */
    type?: string;
    description?: string;
    /** Footer line, e.g. "Oct 15, 2023 · 8 min read". */
    meta?: string;
    /** Cover shown as a thumbnail. Site-relative paths are made absolute. */
    image?: string;
    variant?: "default" | "profile";
    theme?: "dark" | "light";
};

/** Build the og.anit.dev URL for a page's share card. */
export function ogImageUrl({ image, ...card }: OgCard): string {
    const url = new URL(OG_ENDPOINT);
    for (const [key, value] of Object.entries(card)) {
        if (value) url.searchParams.set(key, value);
    }
    if (image) url.searchParams.set("image", new URL(image, SITE_URL).href);
    return url.href;
}
