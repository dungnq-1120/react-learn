/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    extend: {
      width: {
        1000: "100rem",
      },
      textColor: {
        devfe: "blue",
      },
      borderRadius: {
        default: "58px",
      },
    },
  },
  plugins: [],
};
