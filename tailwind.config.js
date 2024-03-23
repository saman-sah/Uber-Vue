/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custom: {
          1: "rgb(237, 237, 237)",
        },        
      },
      height: {
        custom: '100px'
      }
    },
  },
  plugins: [],
}

// bg-custom-1 --> bg-custom-color
// h-custom   --> custom-height