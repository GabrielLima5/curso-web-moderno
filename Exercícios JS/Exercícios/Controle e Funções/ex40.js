/*
    40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada 
    uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o 
    conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.
*/

const arrayA = [1, 2, 5, 6, 10]
const arrayB = [2, 3, 7, 5, 9]

function conceitoDasNotas(array){

    let conceito;

    array.forEach(nota => {
        if (nota >= 0 && nota < 5){
            conceito = 'D'
        } else if (nota >= 5 && nota < 7){
            conceito = 'C'
        } else if (nota >= 7 && nota < 9){
            conceito = 'B'
        } else if (nota >= 9 && nota <= 10){
            conceito = 'A'
        }

        console.log(`Nota: ${nota}; Conceito: ${conceito}`)
    })
}

conceitoDasNotas(arrayA)
console.log('================')
conceitoDasNotas(arrayB)