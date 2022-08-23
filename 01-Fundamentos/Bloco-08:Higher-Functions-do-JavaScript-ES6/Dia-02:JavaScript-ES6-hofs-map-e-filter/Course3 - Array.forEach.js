// Exemplo 1
// Vamos usar o forEach, para realizar a tabuada do 2. 
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

// Resultado:
// 0 * 2: 0
// 1 * 2: 2
// 2 * 2: 4
// 3 * 2: 6
// 4 * 2: 8
// 5 * 2: 10
// 6 * 2: 12
// 7 * 2: 14
// 8 * 2: 16
// 9 * 2: 18

// Exemplo 2
// Utilizando os demais parâmetros para se resolver um problema
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); 
// Resultado:
// [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

// Para fixar
// 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails
const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
  emailListInData.forEach(showEmailList);
  
  // Exercicio1 Aula ao Vivo
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  // Imprimir todos os elementos do array
  letters.forEach( (letter) => {
    console.log(letter)
  });

  // Imprimir todos os indices do array
  letters.forEach( (letter, index) => {
    console.log(index)
  });

  // Imprimir todos o array
  letters.forEach( (letter, index, array) => {
    console.log(array)
  });

  // Imprimir com informação
  letters.forEach( (letter, index, array) => {
    console.log(`Valor corrente: ${letter} --> Index: ${index} --> Array: ${array}`)
  });

  // Refatorando:
  letters.forEach( (letter) => console.log(letter));
  
  // Exercicio2 Aula ao Vivo
  const numbers2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const multiploTres = [];
  numbers2.forEach((number2)=> {
    multiploTres.push(number2 * 3)
  });
  console.log(multiploTres)
  
  // Refatorando:
  const multiploTres1 = [];
  numbers2.forEach((number2)=> multiploTres1.push(number2 * 3));
  console.log(multiploTres1)
  
  // Colocando em uma função
const multiploTres2 = [];
const multiplicaPorTres = () => {
  numbers2.forEach((number) => multiploTres2.push(number * 3))
  return multiploTres2;
}
console.log(multiplicaPorTres())

module.exports = multiplicaPorTres;

// Exercicio3 Aula ao Vivo
const pizzas = [
  {flavor: "Frango com catupiry", price: 12.20},
  {flavor: "Marguerita", price: 13.50},
  {flavor: "Gratinada", price: 15.32},
  {flavor: "Quatro Queijos", price: 13.63},
]
// Mostrar o sabor e preço de cada pizza
const infoPizza = () => {
  pizzas.forEach((pizza) => {
    console.log(`A pizza de ${pizza.flavor} custa R$ ${pizza.price}.`);
  });
};
infoPizza();

// Refatorando:
const infoPizza2 = () => pizzas
.forEach((pizza) => console.log(`A pizza de ${pizza.flavor} custa R$ ${pizza.price}.`));

infoPizza2();