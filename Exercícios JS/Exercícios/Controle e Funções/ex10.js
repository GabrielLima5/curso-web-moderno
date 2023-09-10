/*
    10) Crie uma função que verifica se um número inteiro passado como parametro é divisível por
    3 e retorne true ou false.
*/

function divisivelPor3(num){
    if (num % 3 == 0){
        console.log(`${num} é divisível por 3.`)
    } else {
        console.log(`${num} NÃO é divisível por 3.`)
    }
}

divisivelPor3(15)