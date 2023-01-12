/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255,255,255,0.25)",
        brown: "rgb(30, 30, 17);"
      }
    },
    screens: {
      'sm': '280px',
      // => @media (min-width: 576px) { ... }

      'md': '685px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
