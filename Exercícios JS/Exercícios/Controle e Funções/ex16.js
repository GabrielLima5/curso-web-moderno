/*
    16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O
    programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a
    realize com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora 
    (2, ‘+’, 3). A função efetuará a soma de 2 e 3. 
    Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações 
    inválidas.
*/

function calculate(num1, operator, num2){
    switch(operator){
        case '+':
            console.log(num1 + num2)
            break;

        case '-':
            console.log(num1 - num2)
            break;

        case '*':
        case 'x':
            console.log(num1 * num2)
            break;

        case '/':
        case ':':
            console.log(num1 / num2)
            break;

        default:
            console.log('Operador inválido.')

    }
}

calculate(2, '+', 3);
calculate(8, '-', 14);
calculate(12, '*', 6);
calculate(18, '/', 3);