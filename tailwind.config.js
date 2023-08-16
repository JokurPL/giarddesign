/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        "project-green": "#1B5B31",
        "project-beige": "#DCC1AB",
        "project-black": "#111111",
        "project-button-text": "#F5F0EC",
      },
    },
  },
  plugins: [],
};
