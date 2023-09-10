const moduloA = require('./../../moduloA')
const moduloB = require('./../../moduloB')
const saudacao = require('saudação')
const http = require('http')
const c = require('./pastaC')

console.log(moduloA.ola)
console.log(moduloB.boaNoite())
console.log(saudacao.ola)
console.log(c.ola)

/*http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)*/