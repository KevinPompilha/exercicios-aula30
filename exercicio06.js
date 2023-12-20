// Dado o seguinte array de objetos que representa produtos em um e-commerce:
// const produtos = [
// { id: 1, nome: 'Camiseta', preco: 29.9, quantidade: 2 },
// { id: 2, nome: 'Calça', preco: 59.9, quantidade: 1 },
// { id: 3, nome: 'Tênis', preco: 99.9, quantidade: 3 },
// { id: 4, nome: 'Meias', preco: 9.9, quantidade: 5 }
// ]
// Escreva uma função chamada calcularTotalCompra que recebe esse array de
// produtos e retorna o valor total da compra, levando em consideração o preço e a
// quantidade de cada produto.
// ❖ Exemplo de uso:
// const totalCompra = calcularTotalCompra(produtos)
// console.log(totalCompra) // Output: 468.90

const produtos = [
    { id: 1, nome: 'Camiseta', preco: 29.9, quantidade: 2 },
    { id: 2, nome: 'Calça', preco: 59.9, quantidade: 1 },
    { id: 3, nome: 'Tênis', preco: 99.9, quantidade: 3 },
    { id: 4, nome: 'Meias', preco: 9.9, quantidade: 5 }
]


function calcularTotalCompra(produtos) {
    let total = 0
    produtos.forEach((produtos) => {
        total +=  produtos.preco * produtos.quantidade
    })
    return total
}
const TotalCompra = calcularTotalCompra(produtos)
console.log(TotalCompra)

