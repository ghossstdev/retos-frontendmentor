/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        LightRed: "hsl(0, 100%, 67%)",
        OrangeYellow: "hsl(39, 100%, 56%)",
        GreenTeal: "hsl(166, 100%, 37%)",
        CobaltBlue: "hsl(234, 85%, 45%)",

        LightRedAlpha: "hsla(0, 100%, 67%, 0.1)",
        OrangeYellowAlpha: "hsla(39, 100%, 56%, 0.1)",
        GreenTealAlpha: "hsla(166, 100%, 37%, 0.1)",
        CobaltBlueAlpha: "hsla(234, 85%, 45%, 0.1)",

        White: "hsl(0, 0%, 100%)",
        PaleBlue: "hsl(221, 100%, 96%)",
        LightLavender: "hsl(241, 100%, 89%)",
        DarkGrayBlue: "hsl(224, 30%, 27%)",

        LightSlateBlueBackground: "hsl(252, 100%, 67%)",
        LightRoyalBlueBackground: "hsl(241, 81%, 54%)",
        VioletBlueCircle: "hsla(256, 72%, 46%, 1)",
        PersianBlueCircle: "hsla(241, 72%, 46%, 0)",
      },
      fontFamily: {
        HankenGrotesk: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
