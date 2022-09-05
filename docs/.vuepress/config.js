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
    // navbar: false
    nav: [
      { text: 'Home', link: '/', target: '_blank', rel: 'noopener noreferrer' },
      { text: 'Guide', link: '/dairy/' },
      { 
        text: '❤️',
        ariaLabel: 'My',
        items: [
          { text: 'Github', link: 'https://github.com/wangyuanjian' },
          { text: 'CSDN', link: 'https://blog.csdn.net/broken_promise' },
          { text: '掘金', link: 'https://juejin.cn/user/3227821868068184' },
        ]
      },
    ]
  }
}