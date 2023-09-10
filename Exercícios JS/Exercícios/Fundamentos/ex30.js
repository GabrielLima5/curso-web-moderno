/*
    30. Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada 
    estudante estarão num array, conforme exemplo abaixo. Você deverá calcular a média da nota 
    de cada aluno e retornar um objeto com os atributos nome e media, que indica o aluno que 
    teve o melhor desempenho nas notas.
*/

const soma = array => array.reduce((acc, valorAtual) => acc + valorAtual)
const mediafn = array => soma(array) / array.length

function melhorNota(obj){

    const estudantesComMedias = Object.entries(obj).map(estudante => {
        
        const chave = 0,
        valor = 1

        return {
            nome: estudante[chave], 
            media: mediafn(estudante[valor])
        }
    }) 

    const estudantesOrdenados = estudantesComMedias.sort()
    const melhorEstudante = estudantesOrdenados[0]

    return melhorEstudante
}

const objeto = {
    João: [7, 8, 9, 8],
    Maria: [6, 5, 9, 10],
    Gisele: [4, 3, 10, 10]
}

console.log(melhorNota(objeto))