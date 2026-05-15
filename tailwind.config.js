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
          orange:  '#F97316',
          yellow:  '#FBBF24',
          teal:    '#14B8A6',
          blue:    '#3B82F6',
          indigo:  '#4F46E5',
          pink:    '#EC4899',
          red:     '#EF4444',
          purple:  '#8B5CF6',
          lime:    '#84CC16',
          dark:    '#1E1B4B',
          light:   '#F8FAFF',
          white:   '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow':  'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'slide-up':   'slideUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.7s ease forwards',
        'marquee':    'marquee 28s linear infinite',
      },
      keyframes: {
        float:    { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-18px)' } },
        slideUp:  { from: { opacity: '0', transform: 'translateY(40px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:   { from: { opacity: '0' }, to: { opacity: '1' } },
        marquee:  { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      backgroundImage: {
        'mesh-orange': 'radial-gradient(at 40% 20%, #F97316 0px, transparent 50%), radial-gradient(at 80% 0%, #FBBF24 0px, transparent 50%), radial-gradient(at 0% 50%, #14B8A6 0px, transparent 50%)',
        'mesh-blue':   'radial-gradient(at 40% 20%, #4F46E5 0px, transparent 50%), radial-gradient(at 80% 0%, #3B82F6 0px, transparent 50%), radial-gradient(at 0% 50%, #14B8A6 0px, transparent 50%)',
        'mesh-pink':   'radial-gradient(at 40% 20%, #EC4899 0px, transparent 50%), radial-gradient(at 80% 0%, #8B5CF6 0px, transparent 50%), radial-gradient(at 0% 50%, #F97316 0px, transparent 50%)',
      },
    },
  },
  plugins: [],
}
