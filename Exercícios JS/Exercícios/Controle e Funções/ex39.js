/*
    39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo
    que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e 
    assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar.
*/

const arrayA = [1, 12, 25, 51, 103]
const arrayB = [2, 13, 27, 55, 111]

function changingArrays(arrayA, arrayB){
    if (arrayA.length === arrayB.length){
        for (let i = 0; i < arrayA.length; i++){
            arrayA[i] = arrayA[i] + arrayB[i]
            arrayB[i] = arrayA[i] - arrayB[i]
            arrayA[i] = arrayA[i] - arrayB[i]
        }
    } else {
        return 'Arrays de tamanhos diferentes.'
    }

    console.log(`
    Novo array A: ${arrayA}
    Novo Array B: ${arrayB}`)
}

changingArrays(arrayA, arrayB)