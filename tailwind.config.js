/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "auth-mid": { max: "840px" },
        "auth-sm": { max: "500px" },
        "auth-very-sm": { max: "430px" },
      },
      borderWidth: {
        normal: "1px",
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ".scrollbar": {
          overflowY: "auto",
          scrollbarColor: `#9FA0A7 transparent`,
          scrollbarWidth: "auto",
        },
        ".scrollbar::-webkit-scrollbar": {
          height: "4px",
          width: "6px",
        },
        ".scrollbar::-webkit-scrollbar-thumb": {
          backgroundColor: "#9FA0A7",
          borderRadius: "50px",
        },
      });
    }),
  ],
};
