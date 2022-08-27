// Exemplo 1
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];
console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

//Com a desestruturação de array podemos declarar todas as variáveis contendo os nomes dos países usando apenas uma única linha de código:
const [firstCountry1, secondCountry1, thirdCountry1, fourthCountry1] = arrayCountries;
console.log(firstCountry1); // Brazil
console.log(secondCountry1); // Japan
console.log(thirdCountry1); // China
console.log(fourthCountry1); // Canada


// Para Fixar
// 1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
saudacoes[1](saudacoes[0]); // Olá

const [saudacao, realizaSaudacao] = saudacoes;
console.log (realizaSaudacao(saudacao)); // Olá

// 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
console.log(comida, animal, bebida); // arroz gato água

[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida); // arroz gato água


// 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
console.log(numerosPares); // [6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares;
console.log(numerosPares); // [6, 8, 10, 12];