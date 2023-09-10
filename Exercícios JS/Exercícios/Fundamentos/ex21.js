/*
    21. Criar uma função que receba um array de números e retorne o menor número desse array. 
*/

function menorNumero(array){
    const arrayOrdenado = array.sort()
    return arrayOrdenado[0]
}

console.log(menorNumero([89, 48, 57, 26, 15, 33, 58]))
console.log(menorNumero([24, 55, 33, 12, 14, 11, 75]))