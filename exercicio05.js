// Dado o seguinte array de objetos que representa estudantes:
// const estudantes = [
// { nome: 'João', idade: 20 },
// { nome: 'Maria', idade: 22 },
// { nome: 'Pedro', idade: 18 },
// { nome: 'Ana', idade: 21 }
// ]
// Escreva uma função chamada aplicarDesconto que recebe esse array de
// estudantes e uma função de callback. A função aplicarDesconto deve
// aplicar a função de callback a cada estudante, modificando o objeto para
// // incluir uma propriedade "desconto" com base na idade do estudante.
// A função passada como callback deve se chamar calcularDesconto . O desconto deve
// ser calculado da seguinte forma: se a idade do estudante for menor que 20, o desconto é
// de 10%; caso contrário, o desconto é de 5%. A função deve retornar o array de estudantes
// modificado.
// ❖ Exemplo de uso:
// const estudantesComDesconto = aplicarDesconto(estudantes,
// calcularDesconto);
// console.log(estudantesComDesconto)
// /* Output:
// [
// { nome: 'João', idade: 20, desconto: 0.05 },
// { nome: 'Maria', idade: 22, desconto: 0.05 },
// { nome: 'Pedro', idade: 18, desconto: 0.1 },
// { nome: 'Ana', idade: 21, desconto: 0.05 }

function aplicarDesconto(estudandes, callback){
    return estudantes.map(callback)
    
}



const estudantes = [
{ nome: 'João', idade: 20 },
{ nome: 'Maria', idade: 22 },
{ nome: 'Pedro', idade: 18 },
{ nome: 'Ana', idade: 21 }
]

const calcularDesconto = (estudante) => {
    if(estudante.idade < 20){
        estudante.desconto = 0.1
    }else{
        estudante.desconto = 0.05
    }
    return estudante
}

const estudantesComDesconto = aplicarDesconto(estudantes, calcularDesconto)
console.log(estudantesComDesconto)