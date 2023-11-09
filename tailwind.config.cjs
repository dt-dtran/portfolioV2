/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "public/**/*.html",
    "src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
