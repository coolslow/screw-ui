'use strict'
const path = require('path')

// Set launch page HTML title
const title = 'Screw UI'
// Set default PORT
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
    // NOTE: Delete old svg loader and replaced by new svg loader: 'svg-sprite-loader'
    // Internal svg use file-loader to parse, now we use 'svg-sprite-loader' to parse
    // - 'vue inspect > output.js' to loader info
    // - 'vue inspect --rules' to check the rules
    // Reference ：https://cli.vuejs.org/zh/guide/webpack.html#%E5%AE%A1%E6%9F%A5%E9%A1%B9%E7%9B%AE%E7%9A%84-webpack-%E9%85%8D%E7%BD%AE
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
    // set ESLint
    config.module
      .rule('eslint')
      .use('eslint-loader')
  }
}
