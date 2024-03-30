/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero1: "url('../public/images/hero1.jpg')",
        hero2: "url('../public/images/hero2.jpg')",
        hero3: "url('../public/images/hero3.webp')",
      },
    },
  },
  plugins: [],
};
