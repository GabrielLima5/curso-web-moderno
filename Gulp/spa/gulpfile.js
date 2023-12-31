const gulp = require('gulp')
const { series, parallel } = require('gulp')
const { appHTML, appCSS, appJS, appImg } = require('./gulpTasks/app')
const { depsCSS, depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/server')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appImg),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)