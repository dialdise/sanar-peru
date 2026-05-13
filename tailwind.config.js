/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        s: {
          // Primary greens — SANAR brand
          900: '#0C2417',
          800: '#143322',
          700: '#1A4A30',
          600: '#1E6B42',  // main brand green (CTA, accents)
          500: '#258050',
          400: '#2E9E62',
          300: '#4DBF80',
          200: '#A0DDB8',
          100: '#E0F5EA',
          50:  '#F3FBF6',
          // Warm parchment backgrounds
          bg:  '#FFFFFF',
          'bg-alt': '#F6FAF7',
          // Text
          text: '#0C1A10',
          muted: '#4A5E52',
          subtle: '#8AA896',
          // Gold
          gold: '#C9A227',
          'gold-l': '#E6C84A',
          // Border
          border: '#D8E8DE',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '8xl': ['6rem',   { lineHeight: '1.0',  letterSpacing: '-0.04em' }],
      },
      borderRadius: {
        pill: '80px',
      },
    },
  },
  plugins: [],
}
