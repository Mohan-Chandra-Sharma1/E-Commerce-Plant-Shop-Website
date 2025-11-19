module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mint: '#e9f5f2',
        sky: '#a8dadc',
        blue: '#457b9d',
        navy: '#1d3557',
        cream: '#f1faee'
      },
      fontFamily: {
        inter: ['var(--font-inter)']
      },
      boxShadow: {
        card: '0 8px 24px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
}