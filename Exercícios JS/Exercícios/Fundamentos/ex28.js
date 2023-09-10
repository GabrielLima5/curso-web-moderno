/*
    28. Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o 
    segundo é um número que especifica uma quantidade de dígitos. Essa função deverá retornar 
    somente aqueles números do array que têm a quantidade de dígitos indicada pelo segundo 
    parâmetro.
*/

function filterByLength(array, qtdDigitos){

    let turnToString = []

    let turnToNumber = []

    array.forEach(element => {
        return turnToString.push(element.toString())
    });

    let newArray = turnToString.filter(item => {
        return item.length == qtdDigitos
    });
    
    newArray.forEach(item => {
        return turnToNumber.push(parseInt(item))
    });

    return turnToNumber
}


console.log(filterByLength([12, 314, 437, 28, 1, 7428, 22222], 2))
