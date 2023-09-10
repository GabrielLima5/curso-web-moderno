/*
    23. Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
*/

const countWords = (string) => string.split(" ").length

console.log(countWords('Bota pra quebrar!'))
console.log(countWords('Viajar de avião é bom demais.'))
console.log(countWords('Eu vivi.'))