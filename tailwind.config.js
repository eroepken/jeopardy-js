module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'category-title': '4vh',
        'card-value-md': '9vh',
        'card-value-lg': '11vh',
      },
      fontFamily: {
        logo: ['Gyparody'],
        card: ['"Swiss 911"'],
        question: ['Korinna']
      },
      backgroundImage: {
        'card': 'radial-gradient(ellipse at center, #031277 0%, #031063 100%)'
      },
      colors: {
        'j-blue': {
          light: '#031277',
          dark: '#031063'
        },
        'j-yellow': '#d29d50'
      }
    },
  },
  plugins: [],
}
