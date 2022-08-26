// EXEMPO 1
const numbers = [1, 32, 44, 2, 3];
const iteracoesDoReduce = numbers.reduce((acc, curr) => {
  console.log(`valor atual é ${curr}`);
  // Antes da primeira iteração o valor de início do `acc` é o valor no index 0 do array, e o valor de início de `curr` é o valor no index 1 do array.
      // Iteração 1: valor do acc é 1 e o de curr é 32;
 // Após a primeira iteração, o valor de `acc` muda e passa a acumular agora o resultado do retorno da callback (acc + curr).
     // Iteração 2: valor do acc é 33 e o de curr é 44;
// Acontece então uma segunda iteração, e `curr` agora assume o valor do index na sequência do array, no caso o valor do segundo index e `acc` segue armazenando os retornos.
    // Iteração 3: valor do acc é 77 e o de curr é 2;
    // Iteração 4: valor do acc é 79 e o de curr é 3;
    // Valor final de `acc`é 82 e `curr` para no 3.
  
  
  return acc +  curr // Ao fim das iterações podemos ver que o `acc` armazenou o resultado total do retorno da função.
  
});

console.log(`O resultado final é ${iteracoesDoReduce}`);
  // por fim, esse console.log imprime o retorno final da nossa função, 

//   EXEMPLO 2
const numbers1 = [1, 32, 44, 2, 3];
let sumNumbers = 30;
// A variável `sumNumbers` tem um valor inicial de 30 e vai acumulando, a cada iteração do for, o resultado da operação feita em seu escopo!

for (let index = 0; index < numbers1.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 112

// o mesmo exemplo feito com REDUCE
const numbers2 = [1, 32, 44, 2, 3];

const totalSum = numbers2.reduce((acc, curr) => {
  console.log(`valor do acc é ${acc} e o de curr é ${curr}`);
   // Iteração 1: valor do acc é 30 e o de curr é 1
   // Iteração 2:valor do acc é 31 e o de curr é 32
   // Iteração 3: valor do acc é 63 e o de curr é 44
   // Iteração 4: valor do acc é 107 e o de curr é 2
   // Iteração 5: valor do acc é 107 e o de curr é 3
   // Valor final de `acc`é 112 e `curr` para no 3


  return acc + curr;
}, 30); // O `valorInicial` é 30, ou seja, `acc` antes de executar a primeira iteração já está armazenando esse valor.

console.log(`valor final do acc é ${totalSum}`);
  // por fim, esse `console.log` imprime o retorno da nossa função, que é o valor final de `acc` após cada uma das 5 iterações, tendo iniciado com valor 30.

// REFATORANDO
const numbers3 = [1, 32, 44, 2, 3];
const sumNumbers1 =  (acc, curr) => acc + curr;
const totalSum1 = numbers3.reduce(sumNumbers1, 30);
console.log(totalSum1); //112

// EXEMPLO 3 - Neste exemplo, serão comparados valores para buscar o maior valor em um array. 
const numbers4 = [50, 85, -30, 3, 15];
const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
const bigger = numbers4.reduce(getBigger, 0);
console.log(bigger); // 85

const numbers5 = [50, 85, -30, 3, 15];
const getBigger1 = (bigger, number) => ((bigger > number) ? bigger : number);
const bigger1 = numbers5.reduce(getBigger1, 100);
console.log(bigger1); // 100, já que nenhum número de dentro do array é maior que o valor inicial passado. Então veja: a cada iteração, o reduce mantém o valor do acumulador igual ou o atualiza de acordo com a comparação que é feita.


//EXEMPLO 4 - Faça uma função que some todos os números pares do array:
const numbers6 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// Solução usando filter e reduce:
const getEven = (number) => number % 2 === 0;
const sumPair = (accumulator, number) => accumulator + number;
const sumNumbers2 = (array) => array.filter(getEven).reduce(sumPair); 
console.log(sumNumbers2(numbers6)); // 152
// Solução usando apenas o reduce:
const sumPair1 = (accumulator, number) => (
  (number % 2 === 0) ? accumulator + number : accumulator
);
const sumNumbers3 = (array) => array.reduce(sumPair1, 0);
console.log(sumNumbers3(numbers)); // 152


//EXEMPLO 5 - Crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce!
const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];
  const getBestClass = (acc, materia) => {
    if (acc.nota > materia.nota) return acc;
    return materia;
  };
  
  const reportBetter = (students) => students.map((student) => ({
    name: student.nome,
    materia: student.materias.reduce(getBestClass).name}));
  
  console.log(reportBetter(estudantes));
//   [
//     { name: 'Jorge', materia: 'Português' },
//     { name: 'Mario', materia: 'Biologia' },
//     { name: 'Jorge', materia: 'Português' },
//     { name: 'Maria', materia: 'Química' },
//     { name: 'Natalia', materia: 'Português' },
//     { name: 'Wilson', materia: 'Português' },
//   ]