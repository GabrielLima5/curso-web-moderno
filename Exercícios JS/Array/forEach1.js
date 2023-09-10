const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach((aluno, index, array) => {
    console.log(index+1, aluno)
});

console.log('============')

aprovados.forEach(nome => {
    console.log(nome)
});

console.log('============')

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)