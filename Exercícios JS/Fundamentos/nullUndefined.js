let valor; // não inicializada
console.log(valor); 

valor = null // ausência de valor
 // console.log(valor.toString()) // vai dar erro!

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto.preco);

produto.preco = undefined // evitar atribuições com undefined
console.log(!!produto.preco);
console.log(produto)

produto.preco = null
console.log(!!produto.preco);
console.log(produto)
