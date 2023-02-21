/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "popins": ['Poppins', "sans-serif"] 
    },
    secreen: {
      'sm': '400px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
        "secondary-purple": "#F5F5F5"
      },
    },
  },
  plugins: [],
}
