/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#1ABC9C',
      },
      fontSize: {
        'xxs': '0.625rem', // Custom font size smaller than text-xs (0.75rem)
      },
      maxWidth: {
        'xxs': '0.625rem', // Example of a custom maxWidth value
      },
    },
  },
  plugins: [],
}
