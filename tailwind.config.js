/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ add this line to enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      /* existing extensions */
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      scale: {
        '102': '1.02',
      }
    },
  },
  plugins: [],
}
