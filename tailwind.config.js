/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  important:true,
  theme: {
    extend: {
      fontFamily: {
        ibmPlex: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
