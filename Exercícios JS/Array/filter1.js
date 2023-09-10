const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true },
    {nome: 'iPad Pro', preco: 4199, fragil: true },
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter((item) => {
    return item.nome.length > 12
}))

console.log(produtos.filter((item) => {
    return item.fragil === false
}));

function caro(produto){
    return produto.preco > 500
}

function fragil(produto){
    return produto.fragil === true
}

console.log(produtos.filter(caro).filter(fragil))