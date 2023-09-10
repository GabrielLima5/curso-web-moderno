const fs = require('fs')

// __dirname é uma constante que está presente em todos os módulos do Node
// ele representa o diretório atual
const caminho = __dirname + '/arquivo.json'

// síncrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assíncrono
const conteudoAsync = fs.readFile(caminho, 'utf-8', (err, result) => {
    const config = JSON.parse(result)
    console.log(`${config.db.host}:${config.db.port}`)
});

// tradicional
const json = require('./arquivo.json')
console.log(json.db)

// ler conteúdo de pastas
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
});