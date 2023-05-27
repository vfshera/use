/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        light: "#f8f8ff",
        dark: "#454655",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
