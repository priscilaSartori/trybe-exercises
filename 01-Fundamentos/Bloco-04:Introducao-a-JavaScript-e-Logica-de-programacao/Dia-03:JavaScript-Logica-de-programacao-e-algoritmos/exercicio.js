// ## Exercício 1
// - [] 1 - O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
let fatorial = 1;
for (index = 10; index > 0; index -= 1) {
    fatorial *= index;
}
console.log(fatorial);

// - [] 2 - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'tryber';
let invertida = "";
for (let index = word.length-1; index >= 0; index -= 1) {
 invertida += word[index];
}
console.log(invertida)

// - [] 3 - Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = 'java';
for (let index = 1; index < array.length; index += 1) {
   if (maiorPalavra.length < array[index].length) {
       maiorPalavra = array[index];
   }
}
console.log(maiorPalavra)


let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra = 'java';
for (let index = 1; index < array.length; index += 1) {
   if (menorPalavra.length > array[index].length) {
       menorPalavra = array[index];
   }
}
console.log(menorPalavra)



// - [] 4 - Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.
// let primo = 0;
// for (let corrente = 2; corrente <= 50; corrente =+ 1) {
//     let ehprimo= true;
//     for (let index2 = 2; index2 < corrente; index2 =+ 1) {
//         if (corrente % index2 === 0) {
//             ehprimo = false;
//         }
//     }    
//     if (ehprimo) {
//         primo = corrente;
//     }
// }
// console.log (primo);
let primo =[];
for(let index = 2; index <= 50; index += 1){
   let ehPrimo = true;
   for(let divisor = 2; divisor < index; divisor += 1){
       if(index % divisor === 0){
           ehPrimo = false;
       }
   }
   if (ehPrimo) {
       primo = index
   }
}
console.log(primo)

// - [] 5 - Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
// n = 5
// *****
// *****
// *****
// *****
// *****
let num = 5;
let simbolo = "*";
let linha = '';
for(let linhaindex = 0; linhaindex < num; linhaindex += 1) {
   linha = linha + simbolo
}
for(let linhaindex = 0; linhaindex < num; linhaindex += 1) {
   console.log(linha);
}

// - [] 6 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5
// *
// **
// ***
// ****
// *****
let num = 5;
let simbolo = "*";
let linha = '';
for(let linhaindex = 0; linhaindex < num; linhaindex += 1) {
   linha = linha + simbolo
   console.log(linha);
}

// - [] 7 - Agora inverta o lado do triângulo. Por exemplo:
// n = 5
//     *
//    **
//   ***
//  ****
// *****
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
let num = 5;
let simbolo = '*';
let linha = '';
let posicao = num - 1;
 
for(let linhaindex = 0; linhaindex < num; linhaindex += 1) {
   for(let colunaIndex = 0; colunaIndex < num; colunaIndex += 1) {
       if(colunaIndex < posicao) {
           linha = linha + " ";
       } else {
           linha = linha + simbolo;
       }
   }
   console.log(linha);
   linha = "";
   posicao -= 1;  
}

// - [] 8 - Depois, faça uma pirâmide com n asteriscos de base:
// n = 5
//   *
//  ***
// *****
let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};

// - [] 9 - Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7
//    *
//   * *
//  *   *
// *******
let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}

// - [] 10 - Faça um programa que diz se um número definido numa variável é primo ou não. Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero. Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
let divisors = 1;
let numberToCheck = 31;
for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}
if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');

