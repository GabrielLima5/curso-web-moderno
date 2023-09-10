/* 
    04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá 
    imprimir o resultado e o resto da divisão destes dois valores.
*/
function divisão(dividendo, divisor){
    console.log(`
    Resultado da divisão: ${(dividendo / divisor).toFixed(2)}
    Resto da divisão: ${dividendo % divisor}`)
}

divisão(4, 2);
divisão(18, 3);
divisão(63, 11);