/*
    31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos
    há nesse vetor e imprime a quantidade no console.  
*/

const array1 = [2, -14, 18, -36, 28, 47]

const array2 = [13, -15, -17, 12, -4, -77]

function negativeNumbers(array){
    let negative = 0;

    array.forEach(num => {
        if (num < 0) negative++
    });

    console.log(`Quantidade de números negativos no array: ${negative}`)
}

negativeNumbers(array1)
negativeNumbers(array2)