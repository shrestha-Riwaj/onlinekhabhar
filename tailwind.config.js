/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue-shade':'#0f5cad',
        'blue-footer':'#0d4784',
        'blue-light':'#0487ba',
      }
    },
  },
  plugins: [],
}

