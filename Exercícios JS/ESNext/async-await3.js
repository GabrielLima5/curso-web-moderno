function gerarNumerosEntre(min, max, numerosProibidos){
    if (min > max){
        [min, max] = [max, min]
    }

    return new Promise((resolve, reject) => {

        const aleatorio = parseInt(Math.random() * (max - min) + min)

        if (numerosProibidos.includes(aleatorio)){
            reject('Número repetido')
        } else {
            resolve(aleatorio)
        }

    });
}

gerarNumerosEntre(1, 5, [1, 2, 4])
    .then(n => console.log(n))
    .catch(e => console.error(e))


async function gerarMegaSena(qtd, tentativas){
    try{
        const numeros = []
        for(let _ of Array(qtd).fill()){
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e){
        if (tentativas > 10){
            throw 'Não deu certo...'
        } else {
            return gerarMegaSena(qtd, tentativas + 1)
        }
    }
}

gerarMegaSena(30)
    .then(nums => console.log(nums))
    .catch(e => console.error(e))