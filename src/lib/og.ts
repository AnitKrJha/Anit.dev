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

/**
 * A card-sized version of a meta description. The card has room for two or three lines, so keep the
 * part before the first colon (descriptions here read "What it is: the details"), or cut at a word.
 */
export function cardLine(text: string, max = 96): string {
    const head = text.split(":")[0].trim();
    if (head.length >= 24 && head.length <= max) return head.replace(/[.,;]$/, "") + ".";
    if (text.length <= max) return text;
    return text.slice(0, text.lastIndexOf(" ", max)).replace(/[.,;:]$/, "") + "…";
}

/** Build the og.anit.dev URL for a page's share card. */
export function ogImageUrl({ image, ...card }: OgCard): string {
    const url = new URL(OG_ENDPOINT);
    for (const [key, value] of Object.entries(card)) {
        if (value) url.searchParams.set(key, value);
    }
    if (image) url.searchParams.set("image", new URL(image, SITE_URL).href);
    return url.href;
}
