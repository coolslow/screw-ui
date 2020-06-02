'use strict'

const del = require('del')
const path = require('path')
const less = require('gulp-less')
const { series, src, dest } = require('gulp')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')

// clean task
function clean() {
  return del('./lib', { force: true })
}

// compile less to css
function compile() {
  return src('./src/**/*.less')
    .pipe(less({
      paths: [path.join(__dirname, './src')]
    }))
    .pipe(postcss([
      autoprefixer(),
      cssnano()
    ])) // PostCSS plugins 是否考虑使用 PostCSS 统一处理 @mizhon
    .pipe(dest('./lib'))
}

// function copyfile() {
//   return {}
// }

exports.build = series(clean, compile)
