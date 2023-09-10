/*
    18. Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal 
    dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e 
    preço. Uma funcionalidade que você está desenvolvendo no momento é a de somar o total das 
    despesas. Crie uma função que receba um array de produtos e retorne o total das despesas.
*/

function calculaDespesas(array){
    let soma = array.map(item => item.preco).reduce((acumulador, valorAtual) => acumulador + valorAtual)
    return soma.toFixed(2)
}

console.log(calculaDespesas([{
    nome: 'Panela',
    preco: 30
}, {
    nome: 'Queijo',
    preco: 50
}]));

console.log(calculaDespesas([{
    nome: 'Cinema',
    preco: 53.99
}, {
    nome: 'Viagem',
    preco: 5.99
}]))