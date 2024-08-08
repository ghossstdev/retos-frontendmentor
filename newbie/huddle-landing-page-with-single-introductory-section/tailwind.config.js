/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Violet: "hsl(257, 40%, 49%)",
        SoftMagenta: "hsl(300, 69%, 71%)",
      },
      fontFamily: {
        Poppins: ['"Poppins", "sans-serif"'],
        OpenSans: ['"Open Sans", "sans-serif"'],
      },
      backgroundImage: {
        desktopBackground: "url('./images/bg-desktop.svg')",
        mobileBackground: "url('./images/bg-mobile.svg')",
      },
    },
  },
  plugins: [],
};
