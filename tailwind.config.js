import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#010E17",
        color2: "#07141E",
        color3: "#162F42",
        color4: "#132938",
        color5: "#1E415B",
        color6: "#040d13",
        textColor: "#5481a1",
        // "textColor": "#405869",
        customOrange: "#F45E0A",
      },
      display: ["group-hover"],
      keyframes: {
        dropDown: {
          "0%": {transform: "translateY(-300%) translateX(-50%)", opacity: "0%"},
          "100%": {transform: "translateY(-50%) translateX(-50%)", opacity: "100%"}
        }
      },
      animation: {
        dropDown: 'dropDown .3s linear'
        // dropDown: 'dropDown 1s linear'
      }
    },
  },
  plugins: [],
};
