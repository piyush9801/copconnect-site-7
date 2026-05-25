/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5EFE6',
        'cream-dark': '#EDE4D6',
        ink: '#1A1209',
        'ink-mid': '#3D2B1F',
        muted: '#7A6A5A',
        border: '#E8DDD0',
        brand: '#E8652A',
        'brand-mid': '#F0783A',
        'brand-lt': '#FAD5C2',
        'brand-pale': '#FDF0E9',
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
