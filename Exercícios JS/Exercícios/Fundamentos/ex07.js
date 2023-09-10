/*
    7. Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, 
    inclusivo) e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. 
    Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja, 
    considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não 
    seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, 
    não considerando se numero é igual a minimo ou a maximo.
*/

function estaEntre(num, min, max, inclusivo = false){
    if (inclusivo == true){
        if (num >= min && num <= max){
            return true
        } else {
            return false
        }
    } else {
        if (num > min && num < max){
            return true
        } else {
            return false
        }
    }
}

console.log(estaEntre(10, 0, 100))
console.log(estaEntre(10, 500, 700))
console.log(estaEntre(3, 3, 200))
console.log(estaEntre(3, 3, 200, true))