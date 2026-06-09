/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        crimson: {
          50:  '#fdf2f4',
          100: '#fbe3e7',
          200: '#f6c6ce',
          300: '#ef9aaa',
          400: '#e46079',
          500: '#d63251',
          600: '#b91c3c',
          700: '#9f1239',
          800: '#881337',
          900: '#7a1133',
          DEFAULT: '#8B1A3A',
        },
        gold: {
          100: '#fef9e7',
          200: '#fcefc1',
          300: '#f9d97a',
          400: '#f5c531',
          500: '#C9A227',
          600: '#a07820',
          700: '#7c5a16',
          DEFAULT: '#C9A227',
          light: '#E8C86A',
        },
        olive: {
          100: '#f0f4e0',
          200: '#d8e5a5',
          300: '#b5cc5e',
          400: '#8aaa2b',
          500: '#4D6A1E',
          600: '#3d5518',
          700: '#2e400f',
          DEFAULT: '#4D6A1E',
        },
        dark: {
          bg: '#0D0D0D',
          card: '#1A1A1A',
          surface: '#222222',
          border: '#2E2E2E',
        },
        cream: {
          DEFAULT: '#FAF7F2',
          warm: '#F5EFE6',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        accent: ['"Cinzel"', 'serif'],
      },
      backgroundImage: {
        'radial-gold': 'radial-gradient(circle at center, #C9A227 0%, #7c5a16 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(13,13,13,0.92) 0%, rgba(139,26,58,0.75) 50%, rgba(13,13,13,0.88) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,162,39,0.4)' },
          '50%': { boxShadow: '0 0 0 16px rgba(201,162,39,0)' },
        }
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(201,162,39,0.3)',
        'crimson': '0 4px 24px rgba(139,26,58,0.3)',
        'card': '0 8px 40px rgba(0,0,0,0.4)',
      }
    },
  },
  plugins: [],
}
