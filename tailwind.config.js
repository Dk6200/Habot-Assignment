/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        128: "32rem", // Custom height value
      },
      padding: {
        "5rem": "5rem",
        "1rem": "1rem",
      },
      colors: {
        customBlue: "#072F57",
        customOrange: "#EB7150",
        customBGBlue: "#E8FBFF",
        Black: "#000000",
        borderline: "#FFFFFF",
      },
      textAlign: {
        justify: "justify",
      },

      underlineOffset: {
        10: "10px",
        12: "12px",
        16: "16px",
      },
    },
  },
  plugins: [],
};
