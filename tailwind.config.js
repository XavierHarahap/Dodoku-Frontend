/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'commissioner': ['Commissioner', 'sans-serif'],
        'sans': ['Commissioner', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Design System Colors
        primary: '#9A3DAB',      // Primary Color
        secondary: '#EAE7ED',    // Secondary Color  
        tertiary: '#5D1F64',     // Tertiary Color
        gradient: {
          start: '#9A3DAB',      // Gradient start
          end: '#28142B'         // Gradient end
        },
        neutral: {
          black: '#1A1A1A',      // Black
          white: '#FFFFFF',      // White
          gray: {
            100: '#F5F5F5',
            200: '#E5E5E5',
            300: '#D4D4D4',
            400: '#A3A3A3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717'
          }
        },
        // Legacy purple colors for compatibility
        purple: {
          600: '#9A3DAB',
          700: '#5D1F64',
          800: '#28142B',
        }
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(180deg, #9A3DAB 20%, #4F1C56 50%, #28142B 83%), url('/img/KANTOR PUSAT GMIM.jpg')",
        'gradient-primary': 'linear-gradient(135deg, #9A3DAB 0%, #28142B 100%)'
      }
    },
  },
  plugins: [],
} 