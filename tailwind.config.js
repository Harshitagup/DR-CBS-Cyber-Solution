module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        plum: {
          200: '#8E44AD',
          500: '#9B59B6',
        },
        darkblue: {
          200: '#34495E',
          500: '#2980B9',
        },
        // Add more custom colors as needed
        customRed: '#E74C3C',
        customGreen: '#2ECC71',
        customYellow: '#F1C40F',
        // You can add shades and variations for each color
      },
    },
  },
  plugins: [],
};
