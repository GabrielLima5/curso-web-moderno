let a = 3

global.b = 123 

this.c = 456

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)

// criando uma variável maluca
abc = 3 // não fazer isso
console.log(global.abc)