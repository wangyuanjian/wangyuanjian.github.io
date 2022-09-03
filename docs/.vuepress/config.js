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
  }
}