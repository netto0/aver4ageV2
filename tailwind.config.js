/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "darkGray": "#4b5563",
        "darkerGray": "#374151",
        "lightGray": "#d4d4d8",
        "textColor": "#030712"
      },
    },
    classes: {
      "readOnlyField": "bg-gray-600 border border-gray-500 text-white text-m font-semibold rounded-lg block w-full p-2.5 outline-none hover:cursor-auto"
    }
  },
  plugins: [],
};
