/*
    20) Crie um programa para informar quais e quantas notas são necessárias para entregar o 
    mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de 
    R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
    
    Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o 
    programa deve informar apenas a seguinte informação (note que não foram exibidas informações
    sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function notasEntregues(valor){

    const casasDecimais = valor.toString().split("")

    if (casasDecimais.length == 3){
        switch(casasDecimais[0]){
            case '1':
                console.log(`1 nota de R$100`)
                break;

            case '2':
                console.log(`2 notas de R$100`)
                break;

            case '3':
                console.log(`3 notas de R$100`)
                break;

            case '4':
                console.log(`4 notas de R$100`)
                break;

            case '5':
                console.log(`5 notas de R$100`)
                break;

            case '6':
                console.log(`6 notas de R$100`)
                break;

            case '7':
                console.log(`7 notas de R$100`)
                break;

            case '8':
                console.log(`8 notas de R$100`)
                break;

            case '9':
                console.log(`9 notas de R$100`)
                break;

            default:
                console.log('Número inválido')

        }

        switch(casasDecimais[1]){
            case '1':
                console.log(`1 nota de R$10`)
                break;

            case '2':
                console.log(`1 nota de R$20`)
                break;

            case '3':
                console.log(`1 nota de R$20 e 1 nota de R$10`)
                break;

            case '4':
                console.log(`2 notas de R$20`)
                break;

            case '5':
                console.log(`1 nota de R$50`)
                break;

            case '6':
                console.log(`1 nota de R$50 e 1 nota de R$10`)
                break;

            case '7':
                console.log(`1 nota de R$50 e 1 nota de R$20`)
                break;

            case '8':
                console.log(`1 nota de R$50, 1 nota de R$20 e 1 nota de R$10`)
                break;

            case '9':
                console.log(`1 nota de R$50 e 2 notas de R$20`)
                break;

            default:
                console.log('Número inválido')
        }

        switch(casasDecimais[2]){
            case '1':
                console.log(`1 moeda de R$1`)
                break;

            case '2':
                console.log(`1 nota de R$2`)
                break;

            case '3':
                console.log(`1 nota de R$2 e 1 moeda de R$1`)
                break;

            case '4':
                console.log(`2 notas de R$2`)
                break;

            case '5':
                console.log(`1 nota de R$5`)
                break;

            case '6':
                console.log(`1 nota de R$5 e 1 moeda de R$1`)
                break;

            case '7':
                console.log(`1 nota de R$5 e 1 nota de R$2`)
                break;

            case '8':
                console.log(`1 nota de R$5, 1 nota de R$2 e 1 moeda de R$1`)
                break;

            case '9':
                console.log(`1 nota de R$5 e 2 notas de R$2`)
                break;

            default:
                console.log('Número inválido')
        }
    } else if (casasDecimais.length == 2){

        switch(casasDecimais[0]){
            case '1':
                console.log(`1 nota de R$10`)
                break;

            case '2':
                console.log(`1 nota de R$20`)
                break;

            case '3':
                console.log(`1 nota de R$20 e 1 nota de R$10`)
                break;

            case '4':
                console.log(`2 notas de R$20`)
                break;

            case '5':
                console.log(`1 nota de R$50`)
                break;

            case '6':
                console.log(`1 nota de R$50 e 1 nota de R$10`)
                break;

            case '7':
                console.log(`1 nota de R$50 e 1 nota de R$20`)
                break;

            case '8':
                console.log(`1 nota de R$50, 1 nota de R$20 e 1 nota de R$10`)
                break;

            case '9':
                console.log(`1 nota de R$50 e 2 notas de R$20`)
                break;

            default:
                console.log('Número inválido')
        }

        switch(casasDecimais[1]){
            case '1':
                console.log(`1 moeda de R$1`)
                break;

            case '2':
                console.log(`1 nota de R$2`)
                break;

            case '3':
                console.log(`1 nota de R$2 e 1 moeda de R$1`)
                break;

            case '4':
                console.log(`2 notas de R$2`)
                break;

            case '5':
                console.log(`1 nota de R$5`)
                break;

            case '6':
                console.log(`1 nota de R$5 e 1 moeda de R$1`)
                break;

            case '7':
                console.log(`1 nota de R$5 e 1 nota de R$2`)
                break;

            case '8':
                console.log(`1 nota de R$5, 1 nota de R$2 e 1 moeda de R$1`)
                break;

            case '9':
                console.log(`1 nota de R$5 e 2 notas de R$2`)
                break;

            default:
                console.log('Número inválido')
        }
    } else if (casasDecimais.length == 1){
        switch(casasDecimais[0]){
            case '1':
                console.log(`1 moeda de R$1`)
                break;

            case '2':
                console.log(`1 nota de R$2`)
                break;

            case '3':
                console.log(`1 nota de R$2 e 1 moeda de R$1`)
                break;

            case '4':
                console.log(`2 notas de R$2`)
                break;

            case '5':
                console.log(`1 nota de R$5`)
                break;

            case '6':
                console.log(`1 nota de R$5 e 1 moeda de R$1`)
                break;

            case '7':
                console.log(`1 nota de R$5 e 1 nota de R$2`)
                break;

            case '8':
                console.log(`1 nota de R$5, 1 nota de R$2 e 1 moeda de R$1`)
                break;

            case '9':
                console.log(`1 nota de R$5 e 2 notas de R$2`)
                break;

            default:
                console.log('Número inválido')
        }
    }
}

notasEntregues(7);
console.log('===================================')
notasEntregues(86);
console.log('===================================')
notasEntregues(539);