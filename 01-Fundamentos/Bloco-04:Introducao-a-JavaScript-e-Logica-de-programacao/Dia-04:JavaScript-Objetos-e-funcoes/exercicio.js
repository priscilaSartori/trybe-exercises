// ## Exercício 1 - Crie um objeto player contendo as variáveis listadas abaixo.
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
let player = {
   name: "Marta",
   lastName: 'Silva',
   age: 34,
   medals: {
       golden: 2,
       silver: 3
   }
}

// ## Exercício 2 - Acesse as chaves name, lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
let player = {
   name: "Marta",
   lastName: 'Silva',
   age: 34,
   medals: {
       golden: 2,
       silver: 3
   }
}
console.log("A jogadora " + player.name + ' ' + player.lastName + " tem " + player.age + " anos de idade.")

// ## Exercício 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
//[2006, 2007, 2008, 2009, 2010, 2018]
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// ## Exercício 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes")

// ## Exercício 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata")

// ## Exercício 6 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};
for(let index in names) {
   console.log('Olá ' + names[index])
} 

// ## Exercício 7 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for(let index in car){
   console.log(index, car[index])
}

// ## Exercício 8 - Usando o objeto abaixo, faça os exercícios a seguir:
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// ## Exercício 8.1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
// Bem-vinda, Margarida
console.log('Bem-vida, ' + info.personagem) 

// ## Exercício 🚀 8.2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
//{
//  personagem: 'Margarida',
//  origem: 'Pato Donald',
//  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//  recorrente: 'Sim'
//}
info.recorente = "Sim";

// ## Exercício 8.3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
//personagem
//origem
//nota
//recorrente
for(let dados in info){
   console.log(dados)
}

// ## Exercício 8.4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
//Margarida
//Pato Donald
//Namorada do personagem principal nos quadrinhos do Pato Donald
//Sim
for(let dados in info){
   console.log(info[dados])
}

// ## Exercício 8.5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
//Margarida e Tio Patinhas
//Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
//Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
//Ambos recorrentes // Atenção para essa última linha!
let info2 = {
   personagem: 'Tio Patinhas',
   origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
   nota: 'O último MacPatinhas',
   recorrente: "Sim"
};
 
for(let dados in info){
   if (
       dados === "recorrente" &&
       info[dados] === "Sim" &&
       info2[dados] === "Sim"
   ) {
       console.log("Ambos recorrentes");
   }else {
       console.log(info[dados] + " e " + info2[dados])
   }
}

// ## Exercício 9 - Usando o objeto abaixo, faça os exercícios a seguir:
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// ## Exercício 🚀 9.1 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
console.log("O livro favorito de " + leitor.nome + ' ' + leitor.sobrenome + " se chama '" +  leitor.livrosFavoritos[0].titulo + "'") 

// ## Exercício 🚀 9.2 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:
//{
//  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//  autor: 'JK Rowling',
//  editora: 'Rocco',
//}
leitor.livrosFavoritos.push(
 {
 titulo: 'Harry Potter e o Prisioneiro de Azkaban',
 autor: 'JK Rowling',
 editora: 'Rocco',
}
);

// ## Exercício 🚀 9.3 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
console.log(leitor.nome + " tem "+ leitor.livrosFavoritos.length +" livros favoritos");

// ## Exercício 10 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
//Exemplo de palíndromo: arara.
//verificaPalindrome('arara');
//Retorno esperado: true
//verificaPalindrome('desenvolvimento');
//Retorno esperado: false
function palindromo(string) {
 let reverse = string.split("").reverse().join("");
 if (string === reverse) {
   return true
 } else {
   return false
 }
}
console.log(palindromo("desenvolvimento"));

// ## Exercício 11 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1];.
//Valor esperado no retorno da função: 4.
function array(arrayDeTeste) {
 let maiorValor = 2;
 for (let indice in arrayDeTeste) {
   if(arrayDeTeste[maiorValor] < arrayDeTeste[indice]) {
     maiorValor = indice
   }
 }
 return maiorValor;
}
console.log(array([2, 3, 6, 7, 10, 1]));

// ## Exercício 12 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3];.
//Valor esperado no retorno da função: 6.
function array(arrayDeTeste) {
 let menorValor = 2;
 for (let indice in arrayDeTeste) {
   if(arrayDeTeste[maiorValor] > arrayDeTeste[indice]) {
     menorValor = indice
   }
 }
 return menorValor;
}
console.log(array([2, 4, 6, 7, 10, 0, -3]));

// ## Exercício 13 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
//Valor esperado no retorno da função: Fernanda.
function array(arrayDeTeste) {
  let caracteres = arrayDeTeste[0];
  for (let indice in arrayDeTeste) {
    if(caracteres.length < arrayDeTeste[indice].length) {
      caracteres = arrayDeTeste[indice];
    }
  }
  return caracteres;
}
console.log(array(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// ## Exercício 🚀 14 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste: [2, 3, 2, 5, 8, 2, 3];.
//Valor esperado no retorno da função: 2.
function maisRepetido(numeros) {
 let repetido = 0;
 let contNumero = 0;
 let indexNumeroRepetido = 0;
 for (let index in numeros ) {
   let verificaNumero = numeros[index];
   for (let index2 in numeros) {
     if (verificaNumero === numeros[index2]) {
       contNumero += 1;
     }
   }
   if (contNumero > repetido) {
     repetido = contNumero;
     indexNumeroRepetido = index;
   }
   contNumero = 0;
 }
 return numeros[indexNumeroRepetido];
}
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));
 
// ## Exercício 15 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
//Valor de teste: N = 5.
//Valor esperado no retorno da função: 1+2+3+4+5 = 15.
function natural(numeros) {
 let numNatural = 0;
 for (let index = 1; index <= numeros; index +=1 ) {
   numNatural = numNatural + index;
 }
 return numNatural
}
console.log(natural(5))

// ## Exercício 16 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
//Valor de teste: 'trybe' e 'be'
//Valor esperado no retorno da função: true
//verificaFimPalavra('trybe', 'be');
//Retorno esperado: true
//verificaFimPalavra('joaofernando', 'fernan');
//Retorno esperado: false
function verificaFimPalavra(palavra, fimPalavra) {
 palavra = palavra.split('');
 fimPalavra = fimPalavra.split('');
 controle = true;
 for (let index = 0; index < fimPalavra.length; index += 1) {
   if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
     controle = false;
   }
 }
 return controle;
}
console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));

// ## Exercício 17 - Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
Uma string é um array de caracteres, então cada elemento do array é uma letra.
O valor de cada numeral romano é:
| I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 |
Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.
let numerosRomanos = {
 i:1,
 v:5,
 x:10,
 xl:40,
 l:50,
 xc:90,
 c:100,
 cd:400,
 d:500,
 cm:900,
 m:1000,
}
function romanoParaDecimal(numero) {
 numero = numero.toLowerCase();
 const len = numero.length;
 let soma = numerosRomanos[numero[len - 1]];
 let atual = numerosRomanos[numero[len - 1]];
 for (let i = 2; i <= len; i += 1) {
   const prox = numerosRomanos[numero[len - i]];
   if (atual <= prox) {
     soma += prox;
   } else {
     soma -= prox;
   }
   atual = prox;
 }
 return soma;
}

console.log(romanoParaDecimal('MMXVIII')); // 2018
console.log(romanoParaDecimal('VI')); // 6
console.log(romanoParaDecimal('IV')); // 4

// ## Exercício 18 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
const vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(vector) {
  const result = [];
  for (let index = 0; index < vector.length; index += 1) {
    const numbers = vector[index];
    for (let indexSub = 0; indexSub < numbers.length; indexSub += 1) {
      const current = numbers[indexSub];
      if ((current % 2) === 0) {
        result.push(current);
      } 
    }
  }
  return result;
}

console.log(arrayOfNumbers(vector));

// ## Exercício 🚀 19 - A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const result = {};

for (let index = 0; index < basket.length; index += 1) {
  const fruit = basket[index];
  if (!result[fruit]) result[fruit] = 0;
  result[fruit] += 1;
}

const summaries = [];
for (fruit in result) {
  let message = `${result[fruit]} ${fruit}`;
  if (result[fruit] > 1) message += 's';
  summaries.push(message);
}

console.log(`Sua cesta possui: ${summaries.join(', ')}.`);

//  ## Exercício 20 - Usando o objeto abaixo, faça os exercícios a seguir:
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

//  ## Exercício 20.1 - Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".
let moradoresBlocoDois = moradores.blocoDois;
let ultimoMoradorBlocoDois = moradoresBlocoDois[moradoresBlocoDois.length - 1];

console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois.nome + ' ' + ultimoMoradorBlocoDois.sobrenome + ' mora no ' + ultimoMoradorBlocoDois.andar + '° andar, apartamento ' + ultimoMoradorBlocoDois.apartamento);

//  ## Exercício 20.2 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome, depois faça o mesmo para os moradores do bloco 2.
for (let index = 0; index < moradores.blocoUm.length; index += 1) {
  console.log(moradores.blocoUm[index].nome + ' ' + moradores.blocoUm[index].sobrenome);
}
