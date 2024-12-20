module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a237e',
          light: '#534bae',
          dark: '#000051',
        },
        secondary: {
          DEFAULT: '#7c4dff',
          light: '#b47cff',
          dark: '#3f1dcb',
        },
        background: '#f5f7fa',
        text: '#333333',
        accent: '#00bcd4',
      },
      animation: {
        'text': 'text 0.5s ease-out forwards',
      },
      keyframes: {
        text: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

