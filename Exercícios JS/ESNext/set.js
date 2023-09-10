// set é uma estrutura não indexada que não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians').add('Flamengo')
times.add('Vasco')
console.log(times)

console.log(times.has('Vasco'))
console.log(times.has('vasco'))
times.delete('Flamengo')
console.log(times)

const nomes = ['Raquel', 'Lucas', 'Júlia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)