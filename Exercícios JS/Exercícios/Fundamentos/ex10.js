/*
    10. Elabore uma função que recebe um número como parâmetro e retorne uma string com o 
    símbolo "+" na quantidade especificada no parâmetro.
*/

function simboloMais(nVezes){

    let mais = ''

    for (let i = 1; i <= nVezes; i++){
        mais += '+'
    }

    return mais
}

console.log(simboloMais(2))
console.log(simboloMais(6))