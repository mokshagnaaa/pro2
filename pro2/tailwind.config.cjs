// tailwind.config.cjs
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0a0f2c',
        neonBlue: '#00e0ff',
        glass: 'rgba(255,255,255,0.08)'
      },
      backdropBlur: {
        xs: '2px'
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s infinite'
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 5px #00e0ff, 0 0 10px #00e0ff' },
          '50%': { boxShadow: '0 0 15px #00e0ff, 0 0 30px #00e0ff' }
        }
      }
    }
  },
  plugins: []
};
