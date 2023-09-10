function gerarNumerosEntre(min, max){
    if (min > max){
        [min, max] = [max, min]
    }

    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min) + min)
        resolve(aleatorio)
    });
}

gerarNumerosEntre(1, 400)
    .then(num => num * 10)
    .then(n => console.log(n))