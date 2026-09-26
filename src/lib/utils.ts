export function formattedDate(date: Date): string {
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    })
}

/** ISO date (YYYY-MM-DD) for `<time datetime>` and structured data. */
export function isoDate(date: Date): string {
    const pad = (n: number) => String(n).padStart(2, "0")
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

/** Minutes to read, from the raw Markdown body (code counts, but images and links don't inflate it). */
export function readingTime(body: string): number {
    const words = body
        .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
        .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
        .split(/\s+/)
        .filter(Boolean).length
    return Math.max(1, Math.round(words / 220))
}
