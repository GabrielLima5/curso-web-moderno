/*
setTimeout(function(){
    console.log('Executando callback.')
    
    setTimeout(function(){
        console.log('Executando callback.')

        setTimeout(function(){
            console.log('Executando callback.')
        }, 2000)

    }, 2000)

}, 2000)
*/

function esperarPor(segundos = 2){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Executando promise.')
            resolve()
        }, segundos * 1000)
    })
}

esperarPor(3)
    .then(() => esperarPor(3))
    .then(() => esperarPor(2))