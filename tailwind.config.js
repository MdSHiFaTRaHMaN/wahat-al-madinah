/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#004B38",      // Deep Forest Emerald Green from logo
          "green-dark": "#003628",
          "green-light": "#00674D",
          gold: "#C59B27",       // Metallic Gold from logo
          "gold-light": "#E5B942",
          "gold-hover": "#B3871E",
          "gold-50": "#FDFBF4",
          "gold-100": "#FAF6EE",
          "gold-200": "#F4EBD8",
          bg: "#FAF7F2"          // Off-white / light gold tinted background
        }
      },
      fontFamily: {
        cairo: ['var(--font-cairo)', 'sans-serif'],
        tajawal: ['var(--font-tajawal)', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
