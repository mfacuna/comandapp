/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'food': "url('/assets/img/bg.jpg')",
      },
      maxHeight: {
        '1/2': '50%',
      },
    },
  },
  plugins: [],
}

