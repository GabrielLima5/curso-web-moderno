/*
    13. Crie uma função que receba um array de elementos e retorne um array somente com os 
    números presentes no array recebido como parâmetro.
*/

function filtrarNumeros(array){
    let newArray = array.filter(item => {
        return typeof item == 'number'
    });

    return newArray
}

console.log(filtrarNumeros([1, 3, 'Comer', true, 7, 'Olá', 14]))
console.log(filtrarNumeros([27, 'Oi', 'Queijo', false, 13, undefined, 15, 18]))