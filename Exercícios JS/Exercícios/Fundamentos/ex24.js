/*
    24. Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a 
    quantidade de vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.
*/

function countCharactersOnStrings(caracter, string){

    let qtdVezes = 0

    for (let i = 0; i <= string.length; i++){
        if (string[i] == caracter){
            qtdVezes++
        }
    }

    return qtdVezes
}

console.log(countCharactersOnStrings('a', 'portas abertas'))
console.log(countCharactersOnStrings('b', 'bolas, balões, beijos e bexigas!'))