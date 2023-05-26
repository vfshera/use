/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        black: { 1: "#000001ff", 2: "#000708ff" },
        silver: "#BFC5C8ff",
        "eerie-black": "#202426ff",
        gray: "#727D80ff",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
