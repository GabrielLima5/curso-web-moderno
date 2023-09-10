const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function(){
    console.log('Executando tarefa 1.')
    console.log(new Date().getSeconds())
});

setInterval(function(){
    console.log('Executando tarefa 2.')
    console.log(new Date().getSeconds())
}, 5000)

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando tarefa!')
}, 10000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 12
regra.second = 30

const tarefa3 = schedule.scheduleJob(regra, function(){
    console.log('Olá!')
});