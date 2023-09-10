const fs = require('fs')

function lerArquivo(){
    return new Promise((resolve, reject) => {
        const caminho = __dirname + '/dados.txt'
        const conteudo = fs.readFile(caminho, 'utf-8', (err, result) => {
            if (err){
                reject(err)
            } else {
                resolve(result.toString())
            }
        })
    })
}

lerArquivo()
    .then(conteudo => console.log(conteudo))
    .catch(e => console.error(e))