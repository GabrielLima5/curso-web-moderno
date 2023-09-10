function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])); // ENTRE 40 E 50
console.log(rand([992])); // ENTRE 992 E 1000
console.log(rand([, 10])); // ENTRE 0 E 10
console.log(rand([])) // ENTRE 0 E 1000