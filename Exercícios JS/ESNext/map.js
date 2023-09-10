// o map é uma forma diferente de criarmos pares dinâmicos chave/valor
// semelhante aos objetos

const tecnologias = new Map()

tecnologias.set('React', {framework: false})
tecnologias.set('Angular', {framework: true})

console.log(tecnologias.get('React'))

const chavesVariadas = new Map([
    [function (){}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
]);

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
});

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas)