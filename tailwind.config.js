// tailwind.config.js
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        heading: ['"Oswald"', 'sans-serif'],
      },
      fontSize: {
        base: '1rem',
        '2xl': '1.5rem',
        '5xl': '3rem',
      },
      colors: {
        primary: '#1E40AF',
        brand: {
          light: '#E0F2FE',
          DEFAULT: '#3B82F6',
          dark: '#1D4ED8',
        },
      },
    },
  },
  plugins: [],
}
