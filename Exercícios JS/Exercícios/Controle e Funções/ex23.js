/*
    23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média 
    ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas 
    restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem 
    "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. 
    Repita a operação até que o código lido seja negativo.
*/

function notasAluno(código, n1, n2, n3){

    if (código < 0){
        console.log('Código inválido.')
    } else {

        let notas = [n1, n2, n3]
        notas = notas.sort().reverse()

        let media = ((notas[0]) + (notas[1]) + (notas[2])) / 3

        console.log(`
            Código do aluno: ${código}
            Notas: ${notas.join(',')}
            Média: ${media.toFixed(2)}
            Resultado:  ${media >= 5 ? 'Aprovado' : 'Reprovado'}
        `)
    }
}

notasAluno(10, 8, 3, 5)
notasAluno(40, 5, 3, 4)
notasAluno(-8, 4, 8, 6)