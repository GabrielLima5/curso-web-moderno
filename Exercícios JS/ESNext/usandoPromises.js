// com promise...
const http = require('http')

const getTurma = (letra) => {

    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve, reject) => {
        
        http.get(url, res => {

            let resultado = ''

            res.on('data', dados =>{
                resultado += dados
            });

            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                } catch (e){
                    reject(e)
                }
            })
        })
    })
}

let nomes = []
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `${a.nome}`))

    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(b => `${b.nome}`))

        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(c => `${c.nome}`))
        });
    });
});

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
.then(turmas => [].concat(...turmas))
.then(aluno => aluno.map(a => a.nome))
.then(x => console.log(x))
.catch(e => console.log(e.message))

getTurma('D').catch(e => console.log(e.message))