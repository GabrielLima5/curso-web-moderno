let num1 = 1
let num2 = 2

num1++
console.log(num1)

--num1
console.log(num1)

console.log(++num1 === num2--) 
// o decremento em num2 é pós-fixado, logo esse decremento será realizado
// apenas após a comparação.
console.log(num1 === num2)