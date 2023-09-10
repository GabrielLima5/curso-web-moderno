// Coleção dinâmica de pares propriedade/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['Marca'] = 'Genérica'
produto.preco = 220

delete produto.preco
delete produto['Marca']

console.log(produto)

const carro = {
    modelo: 'A4',
    preco: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 100,

        }
    },
    condutores: [{
        nome: 'Júnior',
        idade: 40
    }, {
        nome: 'Ana',
        idade: 19
    }],
    calcularValorSeguro: function(){}
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante'

console.log(carro)

delete carro.condutores
delete carro.calcularValorSeguro
delete carro. proprietario.endereco

console.log(carro)