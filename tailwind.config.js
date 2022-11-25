/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme)=> ({
        'backgroundimg': "url('/public/Path 9.png')"
      }),
      fontFamily: {
        burtons:'burtons'
      }
    },
  },
  plugins: [],
}
