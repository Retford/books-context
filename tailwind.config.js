/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        // 'inset-black': 'inset 0 0 0 1000px rgba(0, 0, 0, 0.5)',
        // 'inset-black': `-webkit-linear-gradient(180deg, #ffffff,#000000)`,
      },
    },
  },
  plugins: [],
};
