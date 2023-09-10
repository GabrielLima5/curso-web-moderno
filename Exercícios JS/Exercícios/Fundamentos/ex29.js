/*
    29. Crie uma função que recebe um array de números e retorna o segundo maior número presente
    nesse array. 
*/

function segundoMaior(array){
    const arrayOrdenado = array.sort().reverse()
    const segundoMaior = arrayOrdenado[1]
    return segundoMaior
}

console.log(segundoMaior([27, 34, 69, 85, 12, 14]))
console.log(segundoMaior([37, 28, 55, 66, 71, 25]))