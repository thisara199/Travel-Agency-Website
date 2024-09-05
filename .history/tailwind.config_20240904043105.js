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
  plugins: [],
}

