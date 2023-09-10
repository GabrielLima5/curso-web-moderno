function gerarNumeroEntre(min, max, tempo){
    if (min > max){
        [min, max] = [max, min]
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const aleatorio = parseInt(Math.random() * (max - min) + min)
            resolve(aleatorio)
        }, tempo * 1000)
    })
}

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumeroEntre(1, 60, 3),
        gerarNumeroEntre(1, 60, 4),
        gerarNumeroEntre(1, 60, 5),
        gerarNumeroEntre(1, 60, 6),
        gerarNumeroEntre(1, 60, 7)
    ])
}

gerarVariosNumeros().then(nums => console.log(nums))