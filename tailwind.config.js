/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary-bg': '#f7e6ca',
        'primary-bg-alt': '#eaebed',
        'secondary-bg': '#ffc9a5',
        'custom-pink': '#ff8496',
        'components-color': '#364c96',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
