var cores = [
  { id: 1, nome: 'Amarelo' },
  { id: 1, nome: 'Verde' },
  { id: 1, nome: 'Azul' },
  { id: 1, nome: 'Branco' },
  { id: 1, nome: 'Preto' }
]

//Caso você queira extrair apenas os nomes do array 'cores'
//Exemplo 1: utilizando um laço foreach
//Criando um novo array para receber os nomes

var nomeCores = []

// Pecorrendo o array cores e atribuindo ao novo array os nomes

cores.forEach(function (cor) {
  nomeCores.push(cor.nome)
})

console.log(nomeCores) // Imprimirá ["Amarelho", "verde", "Azul", "Branco", "Preto"]

// Exemplo 2:  Utilizando arrow function
console.log('---------------------')

const coresNomes = cores.map(cor => cor.nome)

console.log(coresNomes)
