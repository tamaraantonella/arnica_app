/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      'main-bg': '#83BCA0',
      'main-dark': '#4F866D',
      'main-light': '#9BB0A5',
      'contrast': '#968CD9',
      'light-bg': '#E6EDE2',
      'dark': '#394B41'
    }
  },
};
export const plugins = [];
