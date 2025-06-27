/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        accent: '#dc2626',
        'accent-hover': '#b91c1c',
        'gray-800': '#1F2937',
        'gray-700': '#374151',
        'gray-600': '#4B5563',
        'gray-500': '#6B7280',
        'gray-400': '#9CA3AF',
        'gray-300': '#D1D5DB',
        'red-950': '#450a0a',
        'red-900': '#7f1d1d',
        'red-800': '#991b1b',
        'red-700': '#b91c1c',
        'red-600': '#dc2626',
        'red-500': '#ef4444',
        'red-400': '#f87171',
        'red-300': '#fca5a5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
        'bounce-subtle': 'bounce 2s infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'gradient-radial': 'gradient-radial 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '25%': {
            'background-size': '400% 400%',
            'background-position': 'left top'
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': 'right top'
          },
          '75%': {
            'background-size': '400% 400%',
            'background-position': 'right center'
          }
        },
        'glow-pulse': {
          '0%, 100%': { 
            'box-shadow': '0 0 20px rgba(239, 68, 68, 0.3), 0 0 40px rgba(239, 68, 68, 0.1)' 
          },
          '50%': { 
            'box-shadow': '0 0 40px rgba(239, 68, 68, 0.6), 0 0 80px rgba(239, 68, 68, 0.3)' 
          }
        },
        'gradient-radial': {
          '0%, 100%': { 
            'background': 'radial-gradient(circle at center, rgba(239, 68, 68, 0.3) 0%, transparent 70%)' 
          },
          '50%': { 
            'background': 'radial-gradient(circle at center, rgba(249, 115, 22, 0.4) 0%, transparent 70%)' 
          }
        }
      },
    },
  },
  plugins: [],
};