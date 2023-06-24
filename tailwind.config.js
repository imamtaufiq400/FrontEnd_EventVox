/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3C007A',
        'secondary': '#FF9840',
        'gra1a': '#3C007A',
        'gra1b': '#00023F',
        'tag': '#010340',
        'gra2a': '#471657',
        'gra2b': '#0B0434',
      }
    },
      height: {
        '128': '32rem'
      }
  },
  plugins: [],
}


// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         'primary': '#3C007A',
//         'secondary': '#FF9840',
//         'gra1a': '#3C007A',
//         'gra1b': '#00023F',
//         'tag': '#010340',
//         'gra2a': '#471657',
//         'gra2b': '#0B0434',
//       }
//     },
//   },
//   plugins: [],
// });