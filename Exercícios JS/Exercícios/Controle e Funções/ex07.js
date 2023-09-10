/*
    07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar.
    Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua
    função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 
    3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um
    vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais.
    Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é 
    negativo”.
*/

function equação2Grau(a, b, c){

    const delta = (b ** 2) - 4 * a * c

    if (delta < 0){
        console.log(`Delta é negativo. (${delta})`)
    } else {
        const x1 = (-b + (delta ** 0.5)) / (2 * a)
        const x2 = (-b - (delta ** 0.5)) / (2 * a)
    
        const vetor = [x1, x2]
        console.log(vetor)
    }
}

equação2Grau(7, 3, 4);
equação2Grau(1, -1, -12);
equação2Grau(-2, 3, -2)