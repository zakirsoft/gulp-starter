module.exports = {
  purge: ["./src/sass/**/*.{sass,scss,css}", "./**/*.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "green"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
