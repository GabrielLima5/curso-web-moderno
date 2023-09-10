/*
    01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a 
    soma, subtração, multiplicação e divisão desses valores.
*/
function calculate(a, b){
    console.log(`
    A soma entre esse números é ${a + b}
    A subtração entre esses números é ${a - b}
    A muitilplicação entre esses dois números é ${a * b}
    A divisão entre esses dois números é ${(a / b).toFixed(2)}`)
}

calculate(2, 14)