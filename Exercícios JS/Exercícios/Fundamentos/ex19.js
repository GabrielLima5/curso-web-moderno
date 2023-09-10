/*
    19. Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de 
    desenvolvimento, pretende-se adicionar a funcionalidade de calcular a média de um conjunto 
    de números informados pelo usuário.

    Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma 
    quantidade indeterminada de números e retorne a média simples desses números.
*/

function media(array){
    let soma = array.reduce((acumulador, valorAtual) => acumulador + valorAtual)
    return soma / array.length
}

console.log(media([13, 15]))
console.log(media([7, 38, 36, 44, 12]))