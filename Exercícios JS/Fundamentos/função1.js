// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3);
imprimirSoma(2) // o parâmetro B se torna undefined, logo o resultado é NaN.
imprimirSoma(2, 3, 4, 5, 6, 7) // o JavaScript vai ignorar após o segundo parâmetro.

// Função com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3));
console.log(soma(2))