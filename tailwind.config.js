/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        screens: {
          sm: "576px",
          md: "768px",
          lg: "992px",
          xl: "1200px",
          xxl: "1400px",
          xxxl: "1600px",
        },
        colors: {
          p1: "#1A938A", //primary color
          s1: "#005151", //secondary color
          s2: "#FFBF3F",
          s3: "#E8A115",
          s4: "#FFB280",
          softBg: "#F7F7F7",
          softBg1: "#EAFAF8",
          bodyText: "#3B4A46",
          mainTextColor: "#060B1E",
          strokeColor: "#E4E4E4",
        },
        padding: {
          "30": "120px",
          "15": "60px",
        },
      },
    },
    plugins: [],
  }