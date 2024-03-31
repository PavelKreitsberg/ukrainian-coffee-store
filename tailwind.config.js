/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#ffffff",
      black: "#929292",
      accent: "#aac9d1",
      accentButton: "#5f828d",
      textColor: "#4c4c4c",
    },
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
