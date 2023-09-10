const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa){
    switch(atributo){
        case 'nome':
            console.log(`${atributo} = ${pessoa[atributo]}`)
            break;
    }
}

const dog = {
    nome: 'Princesa',
    raca: 'Vira-lata',
    idade: 84,
    gostaDePetiscos: true
}

for(let item in dog){
    switch(item){
        case 'raca':
            console.log(`A raça da ${dog.nome} é ${dog[item]}`)
    }
}