const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, index){
    console.log(`${index + 1}: ${nome}`)
}

fabricantes.forEach(imprimir);

// imprimir é uma função de callback