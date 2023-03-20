/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        ibmPlex: ["IBM Plex Sans", "sans-serif"],
      },
      boxShadow: {
        auctionCardShadow:
        // '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
          '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
      },
    },
  },
  plugins: [],
};
