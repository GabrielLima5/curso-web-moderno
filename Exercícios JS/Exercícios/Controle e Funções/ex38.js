/*
    38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir 
    todos os números ímpares que estão entre esses valores. Por padrão os valores devem ser 0 
    para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba
    o valor maior antes do menor.
*/

function imparNumbersBetween(min = 0, max = 100){
    if (min > max){
        [min, max] = [max, min]
    }

    let arrayImpares = []

    for (let i = min; i <= max; i++){
        if (i % 2 == 1){
            arrayImpares.push(i)
        }
    }

    console.log(`Números ímpares de ${min} até ${max}: ${arrayImpares}`)
}

imparNumbersBetween(20, 44)
imparNumbersBetween(28, 2)
imparNumbersBetween()