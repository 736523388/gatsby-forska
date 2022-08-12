/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./blog/**/*.{md,mdx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {}
  },
  plugins: ['gatsby-plugin-postcss'],
}
