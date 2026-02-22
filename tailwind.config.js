// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#282C36',
        voilet:"#C778DD",
        ligthGray:"#282C33",
        gray:"#ABB2BF"
      },
      fontFamily: {
        code: ['Fira Code', 'monospace'],
      },
      fontSize: {
        '30px': '30px',
        '34px': '40px',
        '20px': '20px',
      },
    },
  },
  plugins: [],
};
