/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pastel-pink": "#F8D1CC",
        "pastel-blue": "#C9F9F7",
        "light-purple": "#A57DB8",
        "dark-gray": "#3D3D3D",
        "dark-purple": "#7A4691",
        "dark-blue": "#000033",
        "light-blue": "#C9F9F7",
        yellow: "#FDF5B8",
        indigo: "#4B0082",
        "dark-pink": "#F5A9C6",
        mauve: "#B39BC8",
        grape: "#E5C5E5",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
