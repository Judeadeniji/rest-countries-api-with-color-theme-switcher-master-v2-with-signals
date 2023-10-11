/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#202c36",
        "dark-el-bg": "#2B3844",
        "white-bg": "#fafafa",
        "dark-text": "#111517",
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      boxShadow: {
        "header-sh": "0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
        "filter-sh": "0px 2px 9px 0px rgba(0, 0, 0, 0.05)",
        "country-sh": "0px 0px 7px 2px rgba(0, 0, 0, 0.03)",
        "back-sh": "0px 0px 7px 0px rgba(0, 0, 0, 0.29)",
        "border-sh": "0px 0px 4px 1px rgba(0, 0, 0, 0.10)",
      },
      screens: {
        max: { max: "81.25em" },
        med: { max: "62.5em" },
        sma: { max: "37.5em" },
        xsm: { max: "25em" },
      },
    },
  },
  plugins: [],
};
