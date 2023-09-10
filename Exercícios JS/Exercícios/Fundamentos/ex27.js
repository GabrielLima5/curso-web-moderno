/*
    27. Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que 
    corresponde ao objeto recebido como parâmetro, porém com as posições das chaves e valores
    invertidas.
*/

function inverterObjetos(obj){

    let newObject = {}

    let keys = Object.keys(obj)

    let values = Object.values(obj)

    console.log(keys, values)

    values.forEach(value => {
        keys.forEach(key => {
            newObject[value] = key
        })
    });

    return newObject
}

console.log(inverterObjetos({
    a: 1,
    b: 2
}))