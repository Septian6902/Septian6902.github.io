/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
    colors: {
      primary: '#14b8a6',
      dark: '#0f172a',
      light: '#64748b',
      lightt: '#94a3b8',
      white: '#f8fafc',
    },
    screens: {
      '2xl':'1320px',
    }
   },
  },
  plugins: [],
};

