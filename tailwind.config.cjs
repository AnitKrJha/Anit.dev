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
          "linear-gradient(to left, rgb(3, 8, 68), rgb(4, 4, 27), rgb(0, 0, 0))",
        lightGradient:
          "conic-gradient(at left top, rgb(254, 239, 195), rgb(254, 216, 226), rgb(255, 217, 200))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
