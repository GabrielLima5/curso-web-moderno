/* 
    13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o 
    número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a 
    estrutura Switch.
 */

function verifyDateType(num){
    switch(num){
        case 1:
            console.log('É domingo! (fim de semana)')
            break;

        case 2:
            console.log('É segunda-feira (dia útil).')
            break;

        case 3:
            console.log('É terça-feira (dia útil).')
            break;

        case 4:
            console.log('É quarta-feira (dia útil).')
            break;

        case 5: 
            console.log('É quinta-feira (dia útil).')
            break;

        case 6:
            console.log('É sexta-feira! (dia útil)')
            break;

        case 7:
            console.log('É um sábado! (fim de semana)')
            break;

        default:
            console.log('Número inválido.')
    }
}

verifyDateType(1);
verifyDateType(5);
verifyDateType(10);