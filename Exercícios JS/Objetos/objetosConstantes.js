// pessoa aponta para um endereço de memória
// pessoa -> 123 -> {...}

const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // congela o objeto
pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: "Gabriel" })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)