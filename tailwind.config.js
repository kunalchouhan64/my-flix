/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Opensans: ['Open Sans', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
      }, //end of fontFamily
    },
  },
  plugins: [],
}

