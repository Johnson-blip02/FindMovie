/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        londrina: ['"Londrina Sketch"', "cursive"],
        bebas: ['"Bebas Neue"', "sans-serif"],
      },
      colors: {
        primary: "#481E14", // Custom blue colors
        secondary: "#F2613F", // Custom red color
        customBlack: "#0C0C0C", // Custom gray color
        customRed: "#F4442E",
      },
    },
  },
  plugins: [],
};
// BC5F04
