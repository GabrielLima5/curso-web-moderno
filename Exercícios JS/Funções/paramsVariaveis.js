// Usando parâmetros sem declará-los na função
function soma(){
    let soma = 0;

    for(i in arguments){
        soma += arguments[i]
    }

    return soma
}

console.log(soma(1.2, 3.4))
console.log(soma('a', 'b', 'c'))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'Teste'))