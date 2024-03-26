/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Nunito, sans-serif",
        roboto: "Roboto Condensed, sans-serif",
        cursive: "Satisfy, cursive",
      },
      colors: {
        black: "#252525",
        brown: "#b2a47f",
      },
    },
  },
  plugins: [],
};
