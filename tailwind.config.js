/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["GT Walsheim Pro", "sans-serif"],
      babyaletha: ["Baby Aletha", "serif"],
      roastchicken: ["Roast Chicken", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
