/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        raydaBlack: "#101828",
        raydaGrey: {
          100: "#EAECF0",
          200: "#475467",
          300: "#344054",
        },
      },
      fontFamily: {
        ibmPlex: ["IBM Plex Sans", "sans-serif"],
      },
      boxShadow: {
        auctionCardShadow:
          "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
      },
    },
  },
  plugins: [],
};
