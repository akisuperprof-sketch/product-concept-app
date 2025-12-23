/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4', // emerald-50
          100: '#dcfce7', // emerald-100
          200: '#bbf7d0', // emerald-200
          300: '#86efac', // emerald-300
          400: '#4ade80', // emerald-400
          500: '#22c55e', // emerald-500
          600: '#16a34a', // emerald-600
          700: '#15803d', // emerald-700
        },
        harm: {
          health: '#4ade80',  // green-400
          ambition: '#3b82f6', // blue-500
          relation: '#ec4899', // pink-500
          money: '#f59e0b',    // amber-500
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
