/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Bricolage Grotesque Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", '"SF Mono"', "Menlo", "Consolas", "monospace"],
      },
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        ink: {
          DEFAULT: "var(--ink)",
          2: "var(--ink-2)",
          3: "var(--ink-3)",
        },
        line: "var(--line)",
        accent: "var(--accent)",
      },
      maxWidth: {
        measure: "var(--measure)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
