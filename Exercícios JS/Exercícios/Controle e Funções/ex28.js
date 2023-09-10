/*
    28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

const array1 = [2, 3, 7, 14, 25, 36, 40, 8]

const array2 = [1, 7, 9, 41, 5236, 1488, 1441, 55]

function parOuImpar(vetor){

    let arrayPares = []

    let arrayImpares = []

    vetor.forEach(num => {
        if (num % 2 == 0){
            arrayPares.push(num)
        } else if (num % 2 == 1){
            arrayImpares.push(num)
        }
    });

    console.log(`
        Números pares: ${arrayPares.join(',')}
        Números ímpares: ${arrayImpares.join(',')}
    `)
}

parOuImpar(array1)
parOuImpar(array2)