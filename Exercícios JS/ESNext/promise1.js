let a = 1
console.log(a)

let p = new Promise(function (cumprirPromessa){
    cumprirPromessa(3)
});

p.then(function(valor){
    console.log(valor)
});

// PEGANDO A PRIMEIRA LETRA DO PRIMEIRO NOME EM ORDEM ALFABÉTICA DENTRO DE UM ARRAY COM PROMESSA
function returnPrimeiraLetra(array){
    return new Promise((resolve, reject) => {
        resolve(array)
    })
}

returnPrimeiraLetra(['João', 'Carlos', 'Bia', 'Ana'])
    .then(array => array.sort())
    .then(array => array[0])
    .then(nome => console.log(nome[0]))