/** 
 * Configuração do Tailwind CSS
 * @type {import('tailwindcss').Config} 
 */
module.exports = {
  // Especifica os arquivos que serão processados pelo Tailwind CSS
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Configurações personalizadas do tema
  theme: {
    extend: {
      // Extensão de cores personalizadas
      colors: {
        green: {
          90: '#43C6AC',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        red: {
          50: '#F25757',
        },
        blue: {
          90: '#010326',
        },
        yellow: {
          50: '#F2E863',
        },
        white: {
          90: '#F3F3F3'
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
  
  plugins: [],
};
