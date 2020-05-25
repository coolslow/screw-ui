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
    host: '0.0.0.0',
    open: true,
    port: PORT,
    https: false,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@assets', resolvePath('examples/assets'))
      .set('@utils', resolvePath('examples/utils'))

    // set preserveWhitespace
    config.module.rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
    // 删除旧loader，添加新svg loader
    // 删除的原因是原有的svg是用file-loader解析的，现在改用svg-sprite-loader解析
    // 注：可以通过vue inspect > output.json 查看loader信息
    config.module.rules.delete('svg')
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        name: '[name]-[hash:7]',
        prefixize: true
      })
  }
}
