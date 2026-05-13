/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#020A02',
          900: '#061106',
          850: '#0A170A',
          800: '#0D1F0D',
          700: '#143314',
          600: '#1B5E20',
          500: '#2E7D32',
          400: '#388E3C',
          300: '#4CAF50',
          200: '#81C784',
          100: '#C8E6C9',
        },
        gold: {
          950: '#3D3005',
          900: '#7B6209',
          800: '#B8960C',
          700: '#C9A227',
          600: '#D4AF37',
          500: '#DAB84F',
          400: '#E0C060',
          300: '#F0D070',
          200: '#F5E090',
          100: '#FBF0C0',
        },
      },
      fontFamily: {
        geist: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


