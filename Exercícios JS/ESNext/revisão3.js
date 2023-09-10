// Object.values e Object.entries
const obj = {
    a: 1, 
    b: 2, 
    c: 3
}

console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notação literal
const nome = 'Carla'

const pessoa = {
    nome
}

console.log(pessoa)

// Classe
class Animal{}
class Cachorro extends Animal{
    falar(){
        return 'Au au!'
    }
}

const Bob = new Cachorro
console.log(Bob.falar())