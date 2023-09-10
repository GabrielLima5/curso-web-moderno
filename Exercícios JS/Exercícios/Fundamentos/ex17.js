/*
    17. Escreva uma função que receba um array de números e retornará a soma de todos os números desse array. 
*/

function somarNumeros(array){
    let newArray = array.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual
    });

    return newArray
}

console.log(somarNumeros([1, 13, 15, 12]))
console.log(somarNumeros([8, 7, -14, 21, 13]))