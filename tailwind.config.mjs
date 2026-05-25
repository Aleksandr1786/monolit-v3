/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {

        // ── Светлая палитра ЦЕЛОЕ (основная) ──────────────────
        celoe: {
          bg:            '#F5F0E8',
          surface:       '#FAF7F2',
          'surface-alt': '#EDE8DF',
          border:        '#DDD8D0',
          'border-strong': '#B8B2A8',
          text: {
            primary:   '#1A1714',
            secondary: '#6B6560',
            muted:     '#A39E99',
          },
          accent: {
            warm: '#C8A882',
            dark: '#2A2620',
          },
        },

        // ── Тёмная палитра (hero, акцентные секции) ───────────
        monolith: {
          bg:      '#0A0A0F',
          surface: '#12121A',
          border:  '#1F1F2E',
          'border-warm': '#2E2A24',
          text: {
            primary:   '#E8E8F0',
            secondary: '#8888A0',
            muted:     '#4A4A5E',
          },
          accent: {
            warm: '#C8A882',
            cold: '#8892B0',
          },
        },

      },

      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body:    ['"Rubik"', 'sans-serif'],
      },

      animation: {
        'reveal':      'reveal 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in':     'fadeIn 0.5s ease forwards',
        'line-grow':   'lineGrow 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'shimmer':     'shimmer 3s ease-in-out infinite',
        'hero-enter':  'heroEnter 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
      },

      keyframes: {
        reveal: {
          from: { opacity: '0', transform: 'translateY(36px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },