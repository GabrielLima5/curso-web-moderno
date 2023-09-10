function oi(){
    console.log('Oi!')
}

function saudacao(nome){
    return function(req, res, next){
        console.log(`Seja bem-vindo ${nome}!`)
        next()
    }
}

function tchau(){
    console.log('Tchau')
}

module.exports = {
    oi,
    saudacao,
    tchau
}