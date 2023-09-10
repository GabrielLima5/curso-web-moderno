/*
    32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de 
    inteiros.    
*/

const array1 = [2, 14, 18, 36, 28, 47]

const array2 = [13, 15, 17, 12, 4, 77]

function media(array){
    
    let total = array.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual
    });

    let media = total / array.length

    console.log(`Média dos números do array: ${media.toFixed(0)}`)
}

media(array1)
media(array2)