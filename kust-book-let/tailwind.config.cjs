/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#0f9d58",
        "secondary-green": "#3AD489",
        "saturated-green": "#98EBDB",
        "primary-pink": "#F78361",
        "secondary-pink": "#E8C5A9",
        "orange": "#FAC661",
        "black": "#060606",
        "secondary-black": "#1F1F1F",
        "saturated-black": "#323232",
        "purple": "#CB8ECC",
        "secondary-purple": "#F5F5F5",
        "secondary-"
      }
    },
  },
  plugins: [],
}
