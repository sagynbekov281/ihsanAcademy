/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:    '#0B0D1A',
        surface:    '#111428',
        card:       '#161B35',
        border:     '#1E2448',
        violet:     '#5B5BD6',
        'violet-light': '#7B7FE8',
        'violet-dark':  '#3D3FA8',
        muted:      '#7A82A8',
        light:      '#C8CEEA',
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease both',
        'fade-in':   'fadeIn 0.5s ease both',
        'float':     'float 5s ease-in-out infinite',
        'pulse-slow':'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:  { '0%': { opacity:'0', transform:'translateY(28px)' }, '100%': { opacity:'1', transform:'translateY(0)' } },
        fadeIn:  { '0%': { opacity:'0' }, '100%': { opacity:'1' } },
        float:   { '0%,100%': { transform:'translateY(0)' }, '50%': { transform:'translateY(-10px)' } },
      },
    },
  },
  plugins: [],
}
