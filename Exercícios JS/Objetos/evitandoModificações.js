// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promoção'
})

console.log('Extensível: ' + Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag

console.log(produto)

// Object.seal
const pessoa = {
    nome: 'Juliana',
    idade: 35
}

Object.seal(pessoa)
console.log(Object.isSealed(pessoa))
pessoa.profissao = 'Médica'
delete pessoa.idade
pessoa.nome = 'Maria'
console.log(pessoa)

// Object.freeze (selado + valores constantes)
