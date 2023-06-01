/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {

      black: {
        "50": "#191919",
        "100": "#000",
      },
      white: {
        "50": "#f5f5f5",
        "100": "#fff",
      },
      yellow: {
        "100": "#FBB601",
      },
      blue: {
        "100": "#2E72D2",
      },
    },
    fontFamily: {
      'opensans': ["'Open Sans', sans-serif"],
      'hirosh': ["hirosh"],
      'electro': ["electroharmonix"]
    }
  },
  plugins: [],
}
