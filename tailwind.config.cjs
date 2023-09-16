/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        bircolage: ["Bricolage Grotesque", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        darkGradient:
          "radial-gradient(at right bottom, rgb(30, 58, 138), rgb(24, 24, 27), rgb(0, 0, 0))",
        lightGradient:
          "conic-gradient(at left top, rgb(254, 249, 195), rgb(254, 226, 226), rgb(255, 237, 213))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
