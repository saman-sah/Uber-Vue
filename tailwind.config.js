/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
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
        'custom-lg': '100px',
        'custom-sm': '70px'
      }
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".circle-black": {
          "@apply my-0 mx-auto w-[9px] h-[9px] bg-black rounded-full":
            {},
        },
        ".circle-gray": {
          "@apply my-0 mx-auto w-[9px] h-[9px] bg-gray-300 rounded-full":
            {},
        },
        ".square-black": {
          "@apply my-0 mx-auto w-[9px] h-[9px] bg-black":
            {},
        },
        ".square-gray": {
          "@apply my-0 mx-auto w-[9px] h-[9px] bg-gray-300":
            {},
        },
        ".custom-line": {
          "@apply my-0 mx-auto w-[2px] h-[45px] bg-gray-400":
            {},
        },
      });
    }),
  ],
}

// bg-custom-1 --> bg-custom-color
// h-custom-lg   --> custom-height
// h-custom-sm   --> custom-height