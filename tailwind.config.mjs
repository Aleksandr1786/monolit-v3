/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        monolith: {
          bg: '#0A0A0F',
          surface: '#12121A',
          border: '#1F1F2E',
          text: { primary: '#E8E8F0', secondary: '#8888A0', muted: '#4A4A5E' },
          accent: { warm: '#C8A882', cold: '#8892B0' }
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif']
      }
    }
  },
  plugins: []
}