/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust as necessary
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
