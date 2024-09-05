/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      underline: {
        thickness: '2px',
        spacing: '4px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.underline-thick': {
          textDecorationThickness: '2px',
        },
        '.underline-spacing': {
          textUnderlineOffset: '4px',
        },
      }, ['responsive', 'hover']);
    },
  ],
}

