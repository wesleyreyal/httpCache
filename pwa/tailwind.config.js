// tailwind.config.js
/** @types {import("tailwindcss").Config} */
module.exports = {
  content: ['components', 'context', 'pages'].map((folder) => `./${folder}/**/*.{js,ts,jsx,tsx}`),
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
