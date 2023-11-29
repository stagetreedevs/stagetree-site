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
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      // Extensão de imagens de fundo personalizadas
      // backgroundImage: {
      //   'bg-img-1': "url('/img-1.png')",
      //   'bg-img-2': "url('/img-2.png')",
      //   'feature-bg': "url('/feature-bg.png')",
      //   pattern: "url('/pattern.png')",
      //   'pattern-2': "url('/pattern-bg.png')",
      // },
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
