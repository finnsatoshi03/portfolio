/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Nunito, sans-serif",
        serif: "Playfair Display, serif",
        roboto: "Roboto Condensed, sans-serif",
        montserrat: "Montserrat, sans-serif",
        cursive: "Creation, cursive",
      },
      colors: {
        black: "#252525",
        brown: "#b2a47f",
        gray200: "#c2c2c2",
        Vite: "#646cff",
        React: "#61dafb",
        Electron: "#47848f",
        Tailwind: "#38b2ac",
        Expo: "#000020",
        "React Native": "#05a5d1",
        HTML: "#e34f26",
        CSS: "#264de4",
        JS: "#f7df1e",
      },
    },
  },
  plugins: [],
};
