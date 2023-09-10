console.log(module.exports === this)
console.log(module.exports === exports)

// 3 MANEIRAS DE EXPORTAR UM ARQUIVO
this.a = 1
exports.b = 2
module.exports.c = 3

module.exports = {
    publico: true
}