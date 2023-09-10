// O this aponta para module.exports fora de uma função
// mas aponta para o objeto global quando dentro de uma função.
// Porém, dentro de arrow functions, o this não muda, então ele permanece apontando para
// moduie.exports.

console.log('Fora de uma função...')
console.log('This aponta para global?', this === global)
console.log('This aponta para module?', this === module)
console.log('This aponta para module.exports?', this === module.exports)
console.log('This aponta para exports?', this === exports)

console.log('============================')

function logThis(){
    console.log('Dentro de uma função...')
    console.log('This aponta para exports?', this === exports)
    console.log('This aponta para module.exports?', this === module.exports)
    console.log('This aponta para global?', this === global)
}

logThis()

console.log('================================')

const arrowThis = () => {
    console.log('Dentro de uma função arrow...')
    console.log('This aponta para exports?', this === exports)
    console.log('This aponta para module.exports?', this === module.exports)
    console.log('This aponta para global?', this === global)
}

arrowThis()