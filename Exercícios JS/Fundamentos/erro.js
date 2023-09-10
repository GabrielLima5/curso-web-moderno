function tratarErroELancar(erro){
    // throw new Error('...')
    throw 'Deu erro família, perdemo'
}

function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUppercase() + '!!!')
    }

    catch (e){
        tratarErroELancar(e)
    }

    finally{
        console.log('final')
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritando(obj)