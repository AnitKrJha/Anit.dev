/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        bircolage: ["bircolage", "system-ui", "sans-serif"],
        graphik: ["graphik", "system-ui"]
      },
      backgroundImage: {
        darkGradient:
          "linear-gradient(to left, rgb(3, 8, 68), rgb(4, 4, 27), rgb(0, 0, 0))",
        lightGradient:
          "linear-gradient(to right, rgb(254, 212, 232), rgb(252, 205, 165), rgb(254, 240, 138))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
