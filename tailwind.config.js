/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#9836FF",
        lavender: "#F4F5F9",
        dark: "#221F3F",
        textColor: "#6D6C79",
      },
      fontFamily: {
        urbanist: "Urbanist",
        jakarta: "Plus Jakarta Sans",
      },
      backgroundImage: {
        bannerBg: "url('/src/assets/Rectangle 4116.svg')",
        bannerBgCurve: "url('/src/assets/curve.svg')",
      },
    },
  },
  plugins: [],
};
