/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F5F1E8', // Warm ivory canvas
        surface: '#FFFFFF', // Clean white
        'surface-subtle': '#EFE9DE',
        'surface-elevated': '#FFFFFF',
        'border-subtle': '#E7E3DA', // Editorial border
        'text-main': '#29332F', // Dark slate ink (WCAG AAA compliant)
        'text-muted': '#6B716D', // Muted neutral (WCAG AA compliant)
        forest: {
          50: '#EDF5F3',
          100: '#D7E7E3',
          200: '#B2CEC8',
          500: '#235D52',
          700: '#18473D',
          800: '#123B32', // Deep forest green - Primary Brand Color
          900: '#0C2620',
        },
        spruce: {
          50: '#EDF5F3',
          100: '#D7E7E3',
          200: '#B2CEC8',
          500: '#235D52',
          700: '#18473D',
          800: '#123B32',
          900: '#0C2620',
        },
        copper: {
          50: '#FAF4EF',
          100: '#F4E7DC',
          200: '#E8CEBB',
          500: '#C28C6B', // Muted copper accent
          600: '#A97352',
        },
        terracotta: {
          50: '#FAF4EF',
          100: '#F4E7DC',
          200: '#E8CEBB',
          500: '#C28C6B', // Muted copper accent
          600: '#A97352',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#1EBE5D'
        }
      },
      fontFamily: {
        serif: ['Fraunces', '"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft-card': '0 4px 20px -2px rgba(18, 59, 50, 0.05)',
        'elevated': '0 16px 36px -6px rgba(18, 59, 50, 0.08)',
        'floating': '0 20px 48px -8px rgba(18, 59, 50, 0.12)',
      }
    }
  },
  plugins: [],
}
