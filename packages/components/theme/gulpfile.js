'use strict'

const del = require('del')
const sass = require('gulp-sass')
const { series, src, dest } = require('gulp')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')

// clean task
function clean() {
  return del('./lib', { force: true })
}

// compile less to css
function compile() {
  return src('./src/**/*.scss')
    .pipe(sass.sync())
    .pipe(postcss([
      autoprefixer()
    ])) // PostCSS plugins 是否考虑使用 PostCSS 统一处理 @mizhon
    .pipe(dest('./lib'))
}

function copyfile() {
  return src('./src/fonts/**').pipe(dest('./lib/fonts'))
}

exports.build = series(clean, compile, copyfile)
