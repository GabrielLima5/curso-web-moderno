/*
    6. Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for
    booleano, o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, 
    retornará true. Se o parâmetro for numérico, o retorno será o número inverso. Por exemplo, 
    se for fornecido 1, o retorno será -1. Se o parâmetro de entrada não for de nenhum dos tipos 
    acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".
*/

function inverso(parameter){
    if (typeof parameter == 'boolean'){
        return !parameter
    } else if (typeof parameter == 'number'){
        return parameter * -1
    } else {
        return `Booleano ou número esperados, mas o parâmetro é do tipo ${typeof parameter}`
    }
}

console.log(inverso(true))
console.log(inverso(false))
console.log(inverso(29))
console.log(inverso(-33))
console.log(inverso('oi'))