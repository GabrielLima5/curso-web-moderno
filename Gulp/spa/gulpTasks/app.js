const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')

function appHTML(callback){
    gulp.src('src/**/*.html')
        .pipe(htmlMin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'))

    return callback()
}

function appCSS(callback){
    gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))

    return callback()
}

function appJS(callback){
    gulp.src('src/assets/js/**/*.js')
        .pipe(babel({ presets: ["env"] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))

    return callback()
}

function appImg(callback){
    gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))

    return callback()
}

gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appImg', appImg)

module.exports = {
    appHTML, appCSS, appJS, appImg
}