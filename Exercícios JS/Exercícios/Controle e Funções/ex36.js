/*
    36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e 
    um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da 
    multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o 
    mesmo da primeira se e somente se o valor do elemento for maior que 5.
*/

const array1 = [2, 14, 18, 36, 28, 47]

const array2 = [13, 15, 17, 12, 4, 77]

function multiplyArrayNumbers(array, num){
    let newArray = [];

    array.forEach(element => {
        newArray.push(element * num);
    });

    console.log(newArray)
}

multiplyArrayNumbers(array1, 5)
multiplyArrayNumbers(array2, 2)