/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        bircolage: ["bircolage", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        darkGradient:
          "linear-gradient(to left, rgb(3, 8, 68), rgb(4, 4, 27), rgb(0, 0, 0))",
        lightGradient:
          "radial-gradient(at right top, rgba(199, 210, 254,0.4), rgba(254, 202, 202,0.8), rgba(254, 249, 195,0.6))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
