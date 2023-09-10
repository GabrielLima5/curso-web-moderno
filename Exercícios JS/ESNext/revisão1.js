// let e const
{
    var a = 2
    let b = 3
}

console.log(a)
console.log(b)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro.`)

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const { nome, idade: i } = { nome: 'Ana', idade: 19 }
console.log(nome, i)