/*
    9. Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que 
    repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array 
    será retornado.
*/

function repetir(elemento, nVezes){

    let array = []

    for (let i = 0; i < nVezes; i++){
        array.push(elemento)
    }

    return array
}

console.log(repetir(8, 3))
console.log(repetir('código', 5))