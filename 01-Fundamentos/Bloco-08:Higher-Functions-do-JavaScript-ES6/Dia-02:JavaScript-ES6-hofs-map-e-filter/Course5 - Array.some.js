// Exemplo1 - some só peccore o array
// O exemplo abaixo usa o some para verificar se possui algum nome que começa com a letra desejada:
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false


//   Para fixar
// 1 - Escreva uma função que recebe dois parâmetros: o primeiro um array de nomes e o segundo, um nome qualquer. Essa função deve retornar true se o segundo parâmetro - um nome qualquer - estiver contido no primeiro parâmetro - array de nomes. Caso não esteja contido, deve retornar false.
// Dica: use some.
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
    return arr.some((currentName) => currentName === name);
}

console.log(hasName(names, 'Ana'))


  // Exercicio Aula ao Vivo
  const pizzas = [
    {flavor: "Frango com catupiry", price: 12.20},
    {flavor: "Marguerita", price: 13.50},
    {flavor: "Gratinada", price: 15.32},
    {flavor: "Quatro Queijos", price: 13.63},
  ]

  // Retorne TRUE se existir uma pizza com valor menor que 13 e FALSE caso não exista
  const precoMenorQueTreze = () => {
    let result = pizzas.some((pizza) => {return pizza.price < 13})
    return result
  }
  console.log(precoMenorQueTreze());

  // Refatorando:
  const precoMenorQueTreze1 = () => pizzas.some((pizza) => pizza.price < 13)
  console.log(precoMenorQueTreze1());
