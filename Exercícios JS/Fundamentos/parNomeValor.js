// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Aqui no caso acima, há duas constantes com o mesmo identificador: saudacao.
// Porém, não haverá conflito, pois elas estão em CONTEXTOS LÉXICOS diferentes.

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 125,
        idade: 13
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)