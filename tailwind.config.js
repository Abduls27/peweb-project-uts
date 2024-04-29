/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        etext: "32rem",
      },
      fontFamily: {
        bumbbled: ['"Bumbbled"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch