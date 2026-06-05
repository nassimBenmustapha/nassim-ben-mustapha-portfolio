/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        display: ['Orbitron', 'JetBrains Mono', 'monospace'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#E6FFF0',
          100: '#B3FFD9',
          400: '#33FF95',
          500: '#00E676',
          700: '#00C853',
          900: '#009624',
          DEFAULT: '#00E676',
        },
        // Cyan accent — paired with neon green throughout the reference design
        accent: {
          400: '#67E8F9',
          500: '#22D3EE',
          700: '#0891B2',
          DEFAULT: '#22D3EE',
        },
        'neon-green': '#00E676',
        'neon-cyan': '#22D3EE',
        neutral: {
          50: '#F5F7FA',
          100: '#E8EDF2',
          200: '#C9D1CC',
          300: '#9BA8A0',
          400: '#6F7D74',
          500: '#4E5A52',
          600: '#2A332D',
          700: '#1A211C',
          800: '#121712',
          900: '#0A0E0B',
          950: '#000000',
        },
        bg: {
          page: '#060908',
          surface: '#0B100D',
          elevated: '#121813',
        },
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        6: '24px',
        8: '32px',
        12: '48px',
        16: '64px',
        24: '96px',
        32: '128px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        DEFAULT: '8px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 230, 118, 0.05)',
        card: '0 4px 16px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 8px 32px rgba(0, 230, 118, 0.12)',
        modal: '0 24px 48px rgba(0, 0, 0, 0.7)',
        glow: '0 0 16px rgba(0, 230, 118, 0.35)',
        'glow-sm': '0 0 8px rgba(0, 230, 118, 0.3)',
        'glow-cyan': '0 0 12px rgba(34, 211, 238, 0.3)',
      },
      keyframes: {
        'typewriter': {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 6px rgba(0, 230, 118, 0.4)' },
          '50%': { boxShadow: '0 0 18px rgba(0, 230, 118, 0.8)' },
        },
      },
      animation: {
        'typewriter': 'typewriter 2s steps(40, end)',
        'blink': 'blink 1s step-end infinite',
        'glitch': 'glitch 0.3s ease-in-out',
        'scanline': 'scanline 8s linear infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
