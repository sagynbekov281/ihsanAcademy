/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // --- новая палитра (дизайн E2) ---
        night:        '#020A2A', // основной фон
        surface:      '#101336', // карточки
        surface2:     '#1A1E54', // карточки при наведении
        line:         '#2A2F7A', // обводки
        brand:        '#0057FF', // кнопки
        'brand-light':'#008CFF',
        cyan:         '#00B7FF',
        navy:         '#061A63',
        accent:       '#A66BFF', // фиолетовый акцент
        'accent-light':'#CDB2FF',
        'accent-deep':'#7C3AED',
        soft:         '#FFFFFF', // основной текст — чисто белый
        dim:          '#D3D9F7', // подписи (светлее, чем раньше)
        // --- старые цвета оставлены, чтобы другие страницы не сломались ---
        primary:    '#0B0D1A',
        card:       '#161B35',
        border:     '#1E2448',
        violet:     '#5B5BD6',
        'violet-light': '#7B7FE8',
        'violet-dark':  '#3D3FA8',
        muted:      '#7A82A8',
        light:      '#C8CEEA',
      },
      // легче: bold→600, extrabold/black→700 (на всех страницах сразу)
      fontWeight: { bold: '600', extrabold: '700', black: '700' },
      fontFamily: {
        sans:     ['Manrope', 'system-ui', 'sans-serif'],
        display:  ['Manrope', 'system-ui', 'sans-serif'],
        headline: ['Montserrat', 'Manrope', 'sans-serif'],
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