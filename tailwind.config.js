/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        retro: ['VT323', 'monospace'],
      },
      colors: {
        'neon-green': '#00ff41',
        'neon-cyan': '#00d4ff',
        'neon-purple': '#7b2fff',
        'neon-orange': '#ff6b35',
        'dark-bg': '#0d0d0d',
        'dark-card': '#111827',
        'pixel-border': '#00ff41',
        'dark-secondary': '#1e293b',
      },
    },
  },
  plugins: [],
}


