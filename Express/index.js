const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('./api/produto')(app, 'com param')

const { oi, tchau, saudacao } = require('./saudacaoMid')
const { salvar, obter } = require('./api/usuario')

app.post('/usuario', salvar)
app.get('/usuario', obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use('/oi', (req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/clientes/relatorio?completo=true&ano=2023', (req, res) => {
    res.send(`Cliente relatório completo? = ${req.query.completo ? 'Sim' : 'Não'} <br> ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte){
    //     corpo += parte
    // })

    // res.on('end', function(){
    //     res.send(corpo)
    // })

    res.send(req.body)
})

app.get('/clientes/:id/:nome', (req, res) => {
    const id = req.params.id
    const nome = req.params.nome
    res.send(`Cliente ${nome} de id ${id} selecionado!`)
})

app.get('/oi', (req, res, next) => {
    // res.send('Estou <br><b>bem</b>!')

    // res.json({
    //     nome: "iPad 32gb",
    //     preco: 19000,
    //     marca: "Apple"
    // })

    console.log('Durante...')

    res.json([
        {id: 1, nome: "Carolina", position: 1},
        {id: 2, nome: "Carlos", position: 2},
        {id: 3, nome: "Adamastor", position: 3}
    ])

    next()
})

app.use('/oi', (req, res, next) => {
    console.log('Depois...')
    next()
})

app.use('/oi', (req, res, next) => {
    oi()
    next()
})

app.use(saudacao('Gabriel'))

app.use('/oi', (req, res) => {
    tchau()
})

app.listen(4000, () => {
    console.log('Funcionando!')
})