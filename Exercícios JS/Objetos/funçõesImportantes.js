const pessoa = {
    nome: 'Rebecca',
    idade: 2,
    peso: 13
}

// Object Keys retorna as chaves de um objeto
console.log(Object.keys(pessoa))

// Object Values retorna os valores de um objeto
console.log(Object.values(pessoa))

// Object Entries retorna um array de arrays, e cada par chave/valor do objeto se torna um array.
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

console.log('==============')

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2010'
})

pessoa.dataNascimento = '01/01/2017'

console.log(pessoa)

// Object Assign mescla dois objetos
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

console.log(obj)

// Object Freeze congela um objeto
Object.freeze(obj)
obj.c = 1234
console.log(obj)