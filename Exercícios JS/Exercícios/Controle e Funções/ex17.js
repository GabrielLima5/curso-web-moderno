/*
    17) Um funcionário irá receber um aumento de acordo com o seu plano de
    trabalho, de acordo com a tabela abaixo:
        Plano Aumento
        A 10%
        B 15%
        C 20%
    Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e
    imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o 
    plano é inválido.    
*/

function calculaAumento(salario, plano){

    let novoSalario

    switch(plano){
        case 'A':
            novoSalario = salario += (salario * 0.1)
            console.log(`Seu salário novo será de R$ ${novoSalario}.`)
            break;

        case 'B':
            novoSalario = salario += (salario * 0.15)
            console.log(`Seu salário novo será de R$ ${novoSalario}.`)
            break;

        case 'C':
            novoSalario = salario += (salario * 0.20);
            console.log(`Seu salário novo será de R$ ${novoSalario}.`)
            break;

        default:
            console.log('Plano inválido')
    }
}

calculaAumento(1200, 'A'); // 1320
calculaAumento(2000, 'B'); // 2300
calculaAumento(3500, 'C'); // 4200