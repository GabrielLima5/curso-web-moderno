/*
    11. Crie uma função que receba um array e retorne o primeiro e o último elemento desse array 
    como um novo array.
*/

function primeiroEUltimo(array){
    let newArray = [array[0], array[array.length-1]]
    return newArray
}

console.log(primeiroEUltimo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(primeiroEUltimo([7, 48, 57, 26, 31, 44, 55, 87, 28]))