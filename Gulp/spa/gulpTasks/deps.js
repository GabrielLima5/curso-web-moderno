const gulp = require('gulp')
const uglifyCSS = require('gulp-uglifycss')
const concat = require('gulp-concat')

function depsCSS(callback){
    gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifyCSS({ "uglyComments": false }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))

    return callback()
}

function depsFonts(callback){
    gulp.src('node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('build/assets/fonts'))

    return callback()
}

module.exports = {
    depsCSS, depsFonts
}