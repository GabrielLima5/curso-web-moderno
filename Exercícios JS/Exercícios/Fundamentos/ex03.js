/*
    3. Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas 
    por um funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a 
    string "Salário igual a R$ Х", em que Х é o quanto o funcionário ganhou no mês.
*/

function salario(qtdHoras, totalPorHora){
    return `Salário igual a R$${qtdHoras * totalPorHora}`
}

console.log(salario(160, 20))
console.log(salario(200, 60))