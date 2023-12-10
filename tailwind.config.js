const { nextui } = require('@nextui-org/theme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        source: "'Source Sans Pro', sans-serif",
        karla: "'Karla', sans-serif",
        lato: "'Lato', sans-serif",
        firaMono: "'Fira Mono', monospace",
      },
      colors: {
        'my-gray': '#0f126c',
        'dark-gray': '#0f126c',
      },
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  light: {
    // ...
    colors: '#0f126c',
  },
  dark: {
    // ...
    colors: '#0f126c',
  },
  plugins: [nextui()],
};
