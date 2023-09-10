/*
    29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte 
    quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, 
    ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas 
    informações.
*/

const array1 = [2, 14, 18, 36, 28, 47]

const array2 = [13, 15, 17, 12, 4, 77]

function countInterval10To20(array){

    let numbersBetween10And20 = 0, numbersOutOfInterval = 0;

    for(let i = 0; i < array.length; i++){
        if (array[i] >= 10 && array[i] <= 20){
            numbersBetween10And20++
        }
    }

    console.log(`
        Números entre 10 e 20: ${numbersBetween10And20} 
    `)
}

countInterval10To20(array1)
countInterval10To20(array2)