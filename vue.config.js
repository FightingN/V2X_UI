const path = require('path')

function join(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  // 调整 webpack 配置
  chainWebpack: config => {
    config.resolve.alias
      .set('views', join('src/views'))
      .set('utils', join('src/utils'))
      .set('components', join('src/components'))
  },
  // 调整 webpack 配置
  configureWebpack: config => {
    config.externals = {
      echarts: 'echarts'
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001/', // 代理到的后端服务器地址
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
