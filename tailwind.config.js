/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        interTight:['"Inter Tight"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
