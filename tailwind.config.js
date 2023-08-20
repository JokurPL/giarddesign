/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html,js}"],
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
      screens: {
        "3xl": "1920px",
      },
      keyframes: {
        "fade-left": {
          "0%": {
            opacity: "0.5",
            transform: "translateX(3rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-right": {
          "0%": {
            opacity: "0.5",
            transform: "translateX(-3rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-left": "fade-left .7s both",
        "fade-right": "fade-right .7s both",
      },
    },
  },
  plugins: [],
};
