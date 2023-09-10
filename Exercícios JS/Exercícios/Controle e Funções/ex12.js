/* 12) Faça um algoritmo que calcule o fatorial de um número. */

function factorial(num){
    if (num == 0){
       return 1
    } else {
        return num * factorial(num - 1)
    }
}

console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(6))