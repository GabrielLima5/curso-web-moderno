// O Node faz cache dos módulos, então quando fazemos dois requires de um mesmo módulo, os dois
// se interligam. Isso não acontece quando o módulo é, na verdade, uma função factory, que
// retorna um objeto.
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)