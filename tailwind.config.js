export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#060709',
          900: '#0b0d12',
          850: '#10131a',
          800: '#161a24',
          700: '#232938',
        },
        brand: {
          lime: '#ccff00',
          'lime-glow': '#b4f000',
          electric: '#00f59b',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        'super-wide': '0.35em',
        'ultra-wide': '0.5em',
      },
      boxShadow: {
        'lime-glow': '0 0 35px -5px rgba(204, 255, 0, 0.35)',
        'lime-glow-sm': '0 0 15px -3px rgba(204, 255, 0, 0.25)',
        'electric-glow': '0 0 40px -5px rgba(0, 245, 155, 0.3)',
      },
    },
  },
  plugins: [],
}
