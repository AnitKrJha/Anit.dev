# Design: anit.dev, "Aurora"

A single quiet column under a soft aurora. The gradient carries the identity; the content is calm, precise type.

## Color

All tokens are OKLCH custom properties in `src/styles/global.css`. They switch with the `.dark` class on `<html>`.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--bg` | warm paper | deep indigo ink | page |
| `--surface` | a step darker | a step lighter | code, thumbnails, hover rows |
| `--ink` | graphite | warm white | headings, primary text |
| `--ink-2` | muted | muted | body copy |
| `--ink-3` | faint | faint | metadata, dates |
| `--line` | hairline | hairline | separators, borders |
| `--accent` | ember | apricot | links, active states, focus |
| `--aurora-1..4` | peach, rose, lilac, butter | indigo, magenta, ember, teal | the aurora only |

- Strategy: restrained body with one drenched moment (the aurora). The accent covers less than 10% of any page.
- No `#000` or `#fff` in the palette. No gradient text. The aurora is the only gradient; the "now" dot is solid accent with a soft ring.

## Typography

- **Bricolage Grotesque Variable** for everything (wght and opsz axes), self-hosted through Fontsource. Headlines are 700–760 with tight tracking (-0.035em). Body is 400 at 1.0625rem/1.7.
- Code uses the system mono stack (`ui-monospace`, SF Mono, Menlo).
- Dates and numbers use `tabular-nums`.
- Scale: `--step--1` 0.875rem, `--step-0` 1.0625rem, `--step-1` 1.35rem, `--step-2` clamp(1.6rem, 1.3rem + 1vw, 2rem), `--step-hero` clamp(3rem, 2rem + 5vw, 5rem).

## Layout

- One column, `--measure` 44rem wide, fluid side padding.
- Sections are separated by generous space (`--space-section`), with tight groups inside them.
- No cards. Lists are rows with a hairline between them. Project rows pair an image with text.

## Motion

- One page-load reveal: hero lines rise 12px and fade in, staggered 70ms, with `cubic-bezier(0.16, 1, 0.3, 1)`.
- The aurora drifts slowly (about 40s per loop) using transform only.
- Hover: images scale to 1.03 and links shift their underline color.
- Everything is static under `prefers-reduced-motion: reduce`.

## Components

- `BaseLayout.astro`: head and SEO (canonical, OG/Twitter, JSON-LD), aurora, nav, footer.
- `Icon.astro`: local inline SVG icons (no network at build time).
- `ProjectRow.astro`, `PostRow.astro`: the two list grammars.
- `ThemeToggle.astro`: a single button that follows the OS until clicked.
