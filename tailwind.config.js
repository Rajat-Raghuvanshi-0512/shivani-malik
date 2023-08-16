/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beigePrimary': '#B67D3B',
        'whiteSecondary': '#FFF9F3',
        'blackText': '#131313',
        'beige': '#ECD8BD',
        'customWhite': '#FFF9F0',
      },
      fontFamily: {
        Questrial: ['Questrial', 'sans-serif'],
        Italiana: ['Italiana', 'serif'],
        Rockness: ['Rockness', 'serif'],
      },
    },
  },
  plugins: [],
}