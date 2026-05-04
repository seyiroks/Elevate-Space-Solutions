/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C6A75E",       // main gold
        primaryLight: "#E2C98A",  // hover / soft backgrounds
        primaryDark: "#A88C45",   // hover darker state

        dark: "#1E1E1E",
        lightGray: "#F5F5F5",
      },

      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};