// rest = juntar; spread = espalhar
// usar rest como parâmetro de função

// usar spread com objeto
const funcionario = { 
    nome: 'Maria',
    salario: 12348.99
}

const clone = {ativo: true}
const novoObj = {...funcionario, ...clone}
const assign = Object.assign(funcionario, clone)
console.log(novoObj)
console.log(assign)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)