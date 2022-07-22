// ## Exercício 1
// - [] 1 - Obtenha o valor "Serviços" do array menu:
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu [1];
console.log(menuServices);

// ## Exercício 2
// - [] 1 - Procure o índice do valor "Portfólio" do array menu:
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf("Portfólio");
console.log(indexOfPortfolio);


// ## Exercício 3
// - [] 1 - Adicione o valor "Contato" no final do array menu:
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push ("Contato");
console.log(menu);


// ## Exercício 4
// - [] 1 - Utilize o for para imprimir os elementos da lista groceryList com o console.log():
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (index = 0; index < groceryList.length; index++) {
  console.log(groceryList[index]);
}

// ## Exercício 5
// - [] 1 - Utilize o for/of para imprimir os elementos da lista names com o console.log():
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names) {
  console.log (name);
}

// ## Exercicio 6
// - [] 1 - Percorra o array imprimindo todos os valores nele contidos com a função console.log();
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (index =0; index < numbers.length; index++) {
  console.log (numbers[index]);
}

// - [] 2 - Some todos os valores contidos no array e imprima o resultado; 
let result = 0;
for (let index =0; index < numbers.length; index++) {
  result += numbers[index] 
  console.log (result);
}

// - [] 3 - Calcule e imprima a média aritmética dos valores contidos no array; A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
let mediaAritimetica = result / numbers.length;
console.log (mediaAritimetica);

// - [] 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (mediaAritimetica > 20) {
  console.log ("valor maior que 20");
} else {
  console.log ("valor menor ou igual a 20");
}

// - [] 5 - 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maiorValor = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > maiorValor) {
    maiorValor = numbers[index]
  }
}
console.log (maiorValor);


// - [] 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impar = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    impar += 1;
  }
}
    if (result === 0){
      console.log("nenhum valor ímpar encontrado")
      } else {
      console.log(impar);
  }

// - [] 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menorValor = numbers[0];
for (index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < menorValor){
    menorValor = numbers[index]
  }
}
console.log (menorValor)

// - [] 8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let array = [];
for (let index = 0; index <= 25; index += 1) {
  array.push(index);
}
console.log (array);

// - [] 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
let divisao = [];
for (let caracter of array) {
  divisao = caracter / 2;
  console.log (divisao)
}

// ## Exercicico 7
// - [] 1 - Leia este artigo e tente entender o que está acontencedo no código abaixo:
// for (let index = 1; index < array.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (array[index] < array[secondIndex]) {
//       let position = array[index];
//       array[index] = array[secondIndex];
//       array[secondIndex] = position;
//     }
//   }
// }
// - [] 2 - Com base na leitura que fez, considere o array numbers abaixo:
let dia = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// - [] 3 - Ordene o array numbers em ordem crescente e imprima seus valores;
for (let index = 1; index < dia.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (dia[index] < dia[secondIndex]) {
      let position = dia[index];
      dia[index] = dia[secondIndex];
      dia[secondIndex] = position;
    }
  }
}
console.log (dia);


// - [] 4 - Ordene o array numbers em ordem decrescente e imprima seus valores;
for (let index = 1; index < dia.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (dia[index] > dia[secondIndex]) {
      let position = dia[index];
      dia[index] = dia[secondIndex];
      dia[secondIndex] = position;
    }
  }
}
console.log (dia);

// - [] 5 - Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
let multi = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    multi.push(numbers[index] * numbers[index + 1]);
    } else {
      multi.push(numbers[index] * 2);
  }
}
console.log (multi);