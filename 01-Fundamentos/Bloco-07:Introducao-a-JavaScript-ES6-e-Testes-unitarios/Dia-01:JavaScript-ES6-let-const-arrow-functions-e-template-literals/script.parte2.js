//** Crie uma função que receba um número e retorne seu fatorial.
// Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions (Lembre-se de armazenar a função utilizando o tipo de variável correta).
// Dentro da função crie uma variável result.
// Crie a lógica para retornar o fatorial de N!.
// Imprima no terminal "Esse é o fatorial resultado da função" (Lembre-se de utilizar template literals nesse momento).
// Dica: Armazene a chamada da função em uma varíavel para imprimir no terminal seu resultado.
// Bônus: tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

// Primeiro passo: Crie uma função que receba um número por parâmetro.
// Segundo passo: Crie uma variável para armazenar o resultado.
// Como o fatorial de um número inteiro e positivo é o resultado de todos os seus antecessores até o número um, atribua o valor 1 a variável result.
// Terceiro passo: Utilize uma estrutura de repetição para iterar sobre o número passado por parâmetro.
// Como já foi atribuído o valor de 1 para a variável result, você pode atribuir o valor de 2 para o index, já que não é necessário multiplicar 1 * 1.
// Quarto passo: Multiplique o index pelo valor armazenado na variável result e retorne a variável result.
// Quinto passo: Imprima no terminal via console.log o retorno "Esse é o fatorial resultado da função".

const factorial = (number) => {
    let result = 1;

    for (let index = 2; index <= number; index += 1) {
        result *= index;
    }
  
    return result;
  };
  const print = factorial(5); 

console.log(`Esse é o fatorial ${print}`);

// Recursiva
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));

//** Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

// Primeiro passo: Crie uma função que receba uma string por parâmetro.
// Segundo passo: Transforme a string recebida por parâmetro em um array através do método split.
// Terceiro passo: Crie uma variável que será responsável por armazenar o tamanho da maior palavra.
// Quarto passo: Crie uma variável que será responsável por armazenar a palavra de maior tamanho.
// Quinto passo: Crie uma estrutura de repetição utilizando o for of.
// Sexto passo: Crie uma estrutura de condicional utilizando if/else.
// Caso o tamanho da palavra atual seja maior que o valor armazenado em maxLength:
// atribua o valor do tamanho da palavra atual para a variável maxLength;
// armazene a palavra atual na variável result.

const longestWord = (text) => {
    const wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';
    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }
  
    return result;
  }
  console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

//   Longestword com sort em uma linha.
  const longestWord = (text) => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
  
  console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));