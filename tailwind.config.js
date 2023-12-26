/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)"],
      },
      colors: {
        // primaryColor: "#061E45",
        primaryColor: "#0A365C",
        secondaryColor: "#36454F",
        thirdColor: "#C3E3EB",
        screenBgColor: "#FEFEFE",
        greenishColor: "#D1E3DD",
        greenishColorDarky: "#8dbaab",
        placeholderColor: "#9FADA8",
        goldishColor: "#FFB636",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 30s linear infinite",
        "bottom-to-half-transition": "bottom-to-half-transition 1s linear",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "bottom-to-half-transition": {
          from: { transform: "translateY(0)", opacity: 0 },
          to: { transform: "translateY(-50%)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
