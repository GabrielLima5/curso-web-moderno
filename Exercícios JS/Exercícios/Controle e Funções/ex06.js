/*
    06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo
    de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime
    de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capital, taxaJuros, tempo){
    const juros = capital * taxaJuros * tempo
    const montante = capital + juros
    console.log(`R$ ${montante.toFixed(2).replace('.', ',')}`)
}

function jurosCompostos(capital, taxaJuros, tempo){
    const montante = capital * ((1 + taxaJuros) ** tempo)
    console.log(`R$ ${montante.toFixed(2).replace('.', ',')}`)
}

jurosSimples(500, 0.03, 18);
jurosCompostos(500, 0.03, 18);