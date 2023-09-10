/*
    25. A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando 
    uma função para identificar palavras semelhantes.

    Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro,
    um array de strings. A função deverá filtrar as palavras do array que contêm nelas a string 
    do primeiro parâmetro. 
*/

function filterWords(palavra, array){
    let newArray = array.filter(item => {
        return item.includes(palavra)
    });

    return newArray
}

console.log(filterWords('pro', ['programação', 'profissional', 'esforçado']))
console.log(filterWords('apa', ['apareceu', 'passeio', 'apaixonado', 'bolacha']))