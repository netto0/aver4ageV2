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
    classes: {
      "readOnlyField": "bg-gray-600 border border-gray-500 text-white text-m font-semibold rounded-lg block w-full p-2.5 outline-none hover:cursor-auto"
    }
  },
  plugins: [],
};
