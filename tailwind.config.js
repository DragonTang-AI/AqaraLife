/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#070b14',
        card: '#0c1322',
        accent: '#67e8f9',
        line: '#1f2b44'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(103,232,249,.35), 0 12px 40px rgba(34,211,238,.15)'
      },
      backgroundImage: {
        'tech-grid': 'linear-gradient(rgba(53,78,126,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(53,78,126,.2) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};
