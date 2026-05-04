/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:    '#1B3A6B',
          navyDark:'#0F2347',
          navyLight:'#2A5298',
          red:     '#E31E24',
          redDark: '#B71C1C',
          redLight:'#FF4444',
          white:   '#FFFFFF',
          offWhite:'#F8FAFB',
          gray:    '#F1F5F9',
          text:    '#1E293B',
          muted:   '#64748B',
        },
        green: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      fontFamily: {
        cairo:   ['Cairo', 'sans-serif'],
        almarai: ['Almarai', 'sans-serif'],
        inter:   ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0F2347 0%, #1B3A6B 40%, #2A5298 70%, #1B3A6B 100%)',
        'green-gradient': 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%':   { transform: 'translate(0px, 0px) scale(1)' },
          '33%':  { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%':  { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'card':  '0 20px 60px rgba(0,0,0,0.08)',
        'hover': '0 30px 80px rgba(0,0,0,0.15)',
        'navy':  '0 10px 40px rgba(27, 58, 107, 0.3)',
        'red':   '0 10px 40px rgba(227, 30, 36, 0.3)',
      },
    },
  },
  plugins: [],
}
