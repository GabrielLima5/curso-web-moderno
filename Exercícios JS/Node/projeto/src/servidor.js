const bodyParser = require('body-parser')
const express = require('express')
const db = require('./dataBase')
const app = express()
const porta = 3003

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(db.getProdutos())
});

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
});

app.delete('/produtos/:id', (req, res, next) => {
    res.send(db.excluirProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = db.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    });

    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
});