/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#333333',
          light: '#4A4A4A',
          dark: '#1A1A1A',
        },
        'secondary': {
          DEFAULT: '#666666',
          light: '#808080',
          dark: '#4D4D4D',
        },
        'accent': {
          DEFAULT: '#B3B3B3',
          light: '#CCCCCC',
          dark: '#999999',
        },
        'success': '#4CAF50',
        'warning': '#FFC107',
        'error': '#F44336',
        'neutral': {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [],
};