/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', "sans-serif"]
    },
    fontSize: {
      titulo: "32px"
    },
    extend: {
      boxShadow: {
        cardProjeto: '6px 13px 8px 3px rgba(255, 255, 255, 0.15)',
        modalShadowLight: "0px 0px 7px 10px rgba(0, 0, 0, 0.25)",
        modalShadowDark: "0px 0px 7px 3px rgba(255, 255, 255, 0.5)"
      },
      dropShadow: {
        certificadoLight: '10px 11px 2px rgba(0, 0, 0, 0.25)',
        certificadoDark: '10px 11px 2px rgba(255, 255, 255, 0.25)'
      },
      width: {
        desktop: "1128px",
        card: "364px"
      },
      colors: {
        red: {
          100: "rgb(245,0,0)"
        },
        gray: {
          100: 'rgb(245,245,245)'
        },
        dark: {
          100: 'rgb(0, 0, 0)',
          200: 'rgba(82, 82, 82, 1)',
          900: 'rgb(0,0,0)'
        },
        purple: {
          400: 'rgba(44, 0, 102, 1)'
        },
        yellow: {
          400: 'rgba(251, 242, 135, 1)'
        },
        blue: {
          300: 'rgb(76, 111, 255)',
          400: 'rgba(0, 41, 255, 1)'
        }
        
      }
    },
  },
  plugins: [],
}

