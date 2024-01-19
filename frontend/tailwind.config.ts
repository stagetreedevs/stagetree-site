const {nextui} = require("@nextui-org/react");
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Extensão de cores personalizadas
      colors: {
        green: {
          100: '#04CF84',
        },
        gray: {
          10: '#959595',
          20: '#7E7E7E',
          50: '#585858',
          75: '#323232',
          100: '#0C0C0C',
        },
        crimson: {
          100: '#F25757',
        },
        blue: {
          100: '#010326',
        },
        yellow: {
          100: '#F2E863',
        },
        white: {
          90: '#F3F3F3',
          50: '#EEEEEE',
        }
      },
      // Extensão de telas e larguras máximas
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      // Extensão de bordas personalizadas
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
