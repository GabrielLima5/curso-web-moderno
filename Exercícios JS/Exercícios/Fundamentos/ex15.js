/*
    15. Elabore uma função que receba um array de números e retorne um array que tenha todos os 
    números que são pares e que também tenham índices pares.
*/

function pares(array){
    let newArray = array.filter((item, index) => {
        return item % 2 == 0 && index % 2 == 0
    });

    return newArray
}

console.log(pares([1, 2, 3, 4, 5, 7, 8, 12, 14]))
console.log(pares([2, 4, 5, 27, 42, 58, 69, 77, 34, 36, 38]))