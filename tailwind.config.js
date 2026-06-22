/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Menggunakan class-based dark mode untuk integrasi Tailwind
  content: [
    './index.html',
    './public/**/*.{html,js}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        rafcolor: '#0d76ba',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
