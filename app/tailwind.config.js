/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths based on your project's structure
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0px 4px 6px -2px #1E293B1A',
        'custom-heavy': '0px 12px 16px -4px #1E293B0A',
      },
    },
  },
  plugins: [],
};

