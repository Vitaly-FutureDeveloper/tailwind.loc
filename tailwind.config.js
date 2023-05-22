/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        large: '270px',
      },
      fontFamily: {
        main: ['Roboto', 'Arimo'],
      },
    },
  },
  plugins: [],
}

