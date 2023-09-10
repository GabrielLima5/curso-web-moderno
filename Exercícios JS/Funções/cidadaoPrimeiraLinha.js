// Função em JS é First-Class Object (citizens)
// Higher order function

// Criar de forma literal
function fun1(){

}

// Armazenar em variável ou constante
const fun2 = function(){

}

// Armazenar em um array
const array = [function(a, b){ return a + b}]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){ return 'Opa!'}
console.log(obj.falar())

// Passando função como parâmetro dentro de outra função
function run(fun){
    fun()
}

run(function(){ console.log('Executando...') })

// A função pode conter/retornar uma outra função
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)