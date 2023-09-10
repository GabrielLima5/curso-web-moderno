function esperarPor(segundos = 2){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve('Executando promise.')
        }, segundos * 1000)
    })
}

esperarPor()
    .then(msg => console.log(msg))

function retornarValor(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10), 3000)
    })
}

async function executar(){
    let valor = await retornarValor()

    await esperarPor(3)
    console.log(`Async await ${valor}`)

    await esperarPor(3)
    console.log(`Async await ${valor + 1}`)

    await esperarPor(3)
    console.log(`Async await ${valor + 2}`)

    return valor + 3
}

executar()
    .then(valor => console.log(valor))