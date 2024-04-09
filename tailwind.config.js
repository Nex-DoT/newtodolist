import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        openmenu: {
          '0%': { transform: 'translateX(-80);' },
          '100%': { transform: 'translateX(0);' },
        },
        closemenu:{
          '0%': { transform: 'translateX(0);' },
          '100%': { transform: 'translateX(-80);' },
        }
      },
      animation:{
        openan:'open forwards 2s linear',
        closean: 'close forwards 2s linear'
      },
      fontFamily:{
          Inter:["Inter", 'sans-serif']
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
        light: {
            colors: {
                // main background
                background: '#FFFFFF',
                background2: '#F0F0F0',
                // important texts
                foreground: '#1E2023',
                primary: {
                    100: "#FAFAFA",
                    200: '#999999',
                    300: '#E0E0E0',
                },
            },
        },
        dark: {
            colors: {
                // main background
                background: '#151719',
                background2: '#191B1D',
                // important texts
                foreground: '#F0F0F0',
                primary: {
                    100:"#111315",
                    200: '#999999',
                    300: '#1E2023',
                },
            },
        },
    },
})],
}
