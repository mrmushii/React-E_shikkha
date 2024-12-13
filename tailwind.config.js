/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        btn: "#21B573",
        hbtn: "#21b572be",
        abtn: "#21b57293",
        herobg: "#F0FFF0",
        footer: "#282531",
      },

      fontFamily: {
        custom: "Poppins",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
