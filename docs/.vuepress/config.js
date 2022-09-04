const path = require('path')

module.exports = {
  title: 'Levi',
  // base: '/v1/',
  description: 'God so Love the world',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './public/img')
      }
    }
  },
  themeConfig: {
    logo: 'favicon.png',
    nav: [
      { text: 'Home', link: '/', target: '_blank', rel: 'noopener noreferrer' },
      { text: 'Guide', link: '/dairy/' },
      { text: 'Github', link: 'https://github.com/wangyuanjian' },
    ]
  }
}