/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fuji': "url(/public/img/fuji.jpg)",
        'sydney': "url(/public/img/sydney.jpg)",
        'geiranger': "url(/public/img/Geiranger.jpg)",
        'damavand': "url(/public/img/damavand.jpg)"
      }
    },
  },
  plugins: [],
}
