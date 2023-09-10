const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

// IMPERATIVO - O que importa mais é COMO o programa deve executar tal tarefa (passo a passo)
let total1 = 0

for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// DECLARATIVO - o que importa mais é O QUE o programa deve fazer, e internamente, as coisas
// vão sendo feitas.
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length)

// SELECT nome, user FROM tb_contacts WHERE id = 0
// SQL é um exemplo de linguagem declarativa, onde o foco está em O QUE deve ser feito, e não COMO.