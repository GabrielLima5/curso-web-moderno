/*
    8. Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais 
    a zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/

function multiplicar(n1, n2){

    let num = 0

    for (let i = 1; i <= n2; i++){
        num += n1
    }

    return num
}

console.log(multiplicar(9, 7))
console.log(multiplicar(8, 5))
console.log(multiplicar(10, 8))