/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1', // Indigo 500 (Senior Dev Palette)
          light: '#818cf8',   // Indigo 400
          dark: '#4f46e5',    // Indigo 600
        },
        secondary: {
          DEFAULT: '#a855f7', // Violet 500
          light: '#c084fc',   // Violet 400
          dark: '#9333ea',    // Violet 600
        },
        accent: {
          DEFAULT: '#38bdf8', // Cyan/Sky 400
          emerald: '#10b981', // Emerald 500
          rose: '#f43f5e',
        },
        night: {
          bg: '#030712',      // Obsidian Pitch Dark (Linear/Vercel style)
          card: '#0b0f19',
          cardHover: '#111827',
          border: '#1e293b',
          text: '#f8fafc',
          muted: '#94a3b8',
        },
        day: {
          bg: '#f8fafc',
          card: '#ffffff',
          cardHover: '#f1f5f9',
          border: '#e2e8f0',
          text: '#0f172a',
          muted: '#64748b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 30px rgba(99, 102, 241, 0.25)',
        'glow-secondary': '0 0 30px rgba(168, 85, 247, 0.25)',
        'glow-accent': '0 0 30px rgba(56, 189, 248, 0.25)',
        'card-dark': '0 20px 40px -15px rgba(3, 7, 18, 0.9)',
        'card-light': '0 20px 40px -15px rgba(148, 163, 184, 0.15)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s infinite',
        'spin-slow': 'spin 16s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.04)' },
        }
      }
    },
  },
  plugins: [],
}
