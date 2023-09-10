/*
    02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
    Equilátero: Os três lados são iguais. 
    Isósceles: Dois lados iguais. 
    Escaleno: Todos os lados são diferentes. 
    Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua 
    classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições
    matemáticas de existência de um triângulo).
*/

function triangleType(a, b, c){
    if (a == b && b == c){
        console.log('Triangulo equilátero.')
    }

    else if (a == b || b == c || a == c){
        console.log('Triângulo isósceles.')
    }

    else if (a !== b && b !== c && a !== c){
        console.log('Triângulo escaleno.')
    }
}

triangleType(5, 5, 5); // equilátero
triangleType(5, 5, 10); // isósceles
triangleType(5, 3, 4); // escaleno