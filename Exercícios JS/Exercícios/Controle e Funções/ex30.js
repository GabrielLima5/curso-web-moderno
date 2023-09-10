/*
    30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor 
    dentro do vetor.
*/

const array1 = [2, 7, 5, 88, 35, 57]

function maiorEMenor(array){
    let maior, menor;

    for(let i = 0; i < array.length; i++){
        if (maior === undefined && menor === undefined){
            maior = array[i]
            menor = array[i]
        } else {
            if (array[i] > maior){
                maior = array[i]
            } else if (array[i] < menor){
                menor = array[i]
            }
        }
    }

    return [maior, menor]
}

console.log(maiorEMenor(array1))