/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "darkGray": "#a1a1aa",
        "darkerGray": "#6b7280",
        "lightGray": "#d4d4d8",
      },
      
    },
  },
  plugins: [],
};
