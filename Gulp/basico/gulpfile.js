const gulp = require('gulp')
const series = gulp.series

function copyFile(callback){
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB'))

    return callback()
}

module.exports.default = series(copyFile)