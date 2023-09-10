/*
    26. Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente
    com as consoantes, ou seja, sem as vogais.
*/

function apenasConsoantes(string){

    let novaPalavra = ''

    for (let i = 0; i < string.length; i++){
        if (
        string[i] != 'a' && 
        string[i] != 'A' &&
        string[i] != 'e' && 
        string[i] != 'E' &&
        string[i] != 'i' &&
        string[i] != 'I' && 
        string[i] != 'o' &&
        string[i] != 'O' &&
        string[i] != 'u' &&
        string[i] != 'U'){
            novaPalavra += string[i]
        }
    }

    return novaPalavra
}

console.log(apenasConsoantes('estou muito cansado'))