/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#48556A",
        grey: "#6E8098",
        lightGrey: "#9DAEC2",
        veryLightGrey: "#ECF2F8",
        primary: "#ECF2F8",
      },
      fontSize: {
        xs: ["13px", {
          lineHeight: '20px',
          letterSpacing: '0.121875px',
          fontWeight: '500',
        }],
      },
    },
  },
  plugins: [],
}
