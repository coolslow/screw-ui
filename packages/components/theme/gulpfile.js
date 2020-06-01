'use strict'

const del = require('del')
const path = require('path')
const less = require('gulp-less')
const { series, src, dest } = require('gulp')
const LessAutoprefix = require('less-plugin-autoprefix')

var autoprefix = new LessAutoprefix({
  browsers: ['last 2 versions']
})

// 删除
function clean() {
  return del('./lib', { force: true })
}

// Less to CSS
function compile() {
  return src('./src/**/*.less')
    .pipe(less({
      paths: [path.join(__dirname, './src')]
    }))
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(dest('./lib'))
}

// function copyfile() {
//   return {}
// }

exports.build = series(clean, compile)
