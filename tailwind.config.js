const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
        inter: "Inter",
        cabin: "Cabin",
      },
      colors: {
        "primary-purple": "#59358B",
        "secondary-blue": "#1900FF",
        "gray-background": "#E5E5E5",
        "light-white": "#F6F6F6",
        "light-blue": "#62C5E3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
