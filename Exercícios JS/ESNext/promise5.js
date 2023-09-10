function funcionarOuNão(valor, chanceErro){
    return new Promise((resolve, reject) => {

        try{
            if (Math.random() < chanceErro){
                reject('Ocorreu um erro.')
            } else {
                resolve(valor)
            }
        } catch(e){
            reject(e)
        }
        
    })
}

funcionarOuNão('Testando', 0.1)
    .then(valor => console.log(valor))
    .then(
        v => console.log(v),
        e => console.error('Erro do then: ' + e)
    )
    .catch(e => console.error('Erro do catch: ' + e))