function getData(){
    return new Promise((resolve, reject) => {
        try{
            const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
            const data = fetch(url)
            resolve(data)
        }
        catch(e){
            reject(e)
        }
    })
}

function showDataOnConsole(){
    getData()
        .then(res => res.json())
        .then(funcionarios => {
            const homens = funcionarios.filter(func => func.genero = 'M')
            const italianos = homens.filter(func => func.pais === 'Canada')
            console.log(italianos)
        })
}

showDataOnConsole()