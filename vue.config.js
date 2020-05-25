module.exports = {
  publicPath: './',
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Screw UI'
    }
  },
  devServer: {
    port: 3000
  }
}
