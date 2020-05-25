'use strict'
const path = require('path')

// 设置启动页HTML标题
const title = 'Screw UI'
// 设置默认端口
const PORT = process.env.port || 3000

function resolvePath (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: title
    }
  },
  devServer: {
    open: true,
    port: PORT,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@assets', resolvePath('example/assets'))
      .set('@utils', resolvePath('example/utils'))
  }
}
