/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT ({
  content: ["./public/build/*.{html, js, css}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
