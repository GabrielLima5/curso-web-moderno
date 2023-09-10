const gulp = require('gulp')
const { series, parallel } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS(callback){
    gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', e => sass.logError()))
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
    return callback()
}

function copiarHTML(callback){
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
    return callback()
}

module.exports.default = parallel(transformacaoCSS, copiarHTML)