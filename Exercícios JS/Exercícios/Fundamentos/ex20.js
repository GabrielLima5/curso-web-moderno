/*
    20. Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse 
    triângulo. A precisão deverá ser de duas casas decimais, arredondando se necessário.
*/

function triangleArea(b, h){
    return ((b * h) / 2).toFixed(2)
}

console.log(triangleArea(3, 5))
console.log(triangleArea(8, 12))