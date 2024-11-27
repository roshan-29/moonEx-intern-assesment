// tailwind.config.js
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#051422',  // Custom color name and value
        'custom-yellow':'#F9D423',
        'custom-gray-light': 'rgba(217, 217, 217, 0.1)',
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(to left, #FFE68F , #E4B40D 100%)',
      },
      fontFamily: {
        'neue-machina': ['"Neue Machina"', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        exo: ['Exo 2', 'sans-serif'],
      },
    },
  },
  plugins: [],
  
}
