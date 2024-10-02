import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#0C0C0C",
        color2: "#141414",
        color3: "#212121",
        color4: "#2C2C2C",
        color5: "#1E415B",
        color6: "#040d13",
        textColor: "#727272",
        customOrange: "#F45E0A",
      },
      display: ["group-hover"],
      keyframes: {
        dropDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0%" },
          "100%": { transform: "translateY(0%)", opacity: "100%" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)", opacity: "0%" },
          "100%": { transform: "translateX(0%)", opacity: "100%" },
        },
        fadeIn: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        dropDown: "dropDown .2s linear",
        slideLeft: "slideLeft .2s linear",
        fadeIn: "fadeIn .2s linear",
      },
    },
  },
  plugins: [],
};
