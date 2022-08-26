// Exemplo1
const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];
  
  const fullNames = [];
  
  for (let index = 0; index < persons.length; index += 1) {
    fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
  }
  
  console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

// Agora com a função map:
  const persons1 = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];
  
  const fullNames1 = persons1.map((person) => `${person.firstName} ${person.lastName}`);
  
  console.log(fullNames1); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]


//   Exemplo2
const numbers = [1, 2, 3, 4, -5];
const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));
console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// Apenas usando o for:
const numbers1 = [1, 2, 3, 4, -5];
const negativeNumbers1 = [];
for (let index = 0; index < numbers1.length; index += 1) {
  if (numbers1[index] > 0) {
    negativeNumbers1.push(numbers1[index] * -1);
  } else {
    negativeNumbers1.push(numbers1[index]);
  }
}
console.log(negativeNumbers1); // [ -1, -2, -3, -4, -5 ]
console.log(numbers1); // [ 1, 2, 3, 4, -5 ]


// Exemplo3
// Outras formas de usar o .map é unir dois arrays para criar um novo. Considere que você possui duas listas: o preço do primeiro produto (Arroz) é o primeiro elemento da lista prices (2.99), e assim por diante:
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];
const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]

// A diferença entre o Map e o forEach
// O map aplica sobre os elementos de um array uma função e retorna um array novo, sem modificar o original;
// A forEach não tem tal restrição. Ela pode modificar o array original e retorna nada por padrão - ela pode criar um array novo a partir de um antigo, pode simplesmente buscar por um elemento e retorná-lo, pode não retornar nada, enfim! Ela é genérica e pode fazer diversas coisas.


// Exemplo4
const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map((numero) => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

const paresMenoresQueCinco = [];
numeros.forEach((numero) => {
  if (numero < 5 && numero % 2 === 0) {
    paresMenoresQueCinco.push(numero);
  }
});
console.log(paresMenoresQueCinco); // Retorno: [2, 4]


// Exemplo5
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
        { name: 'Matemática', nota: '59' },
        { name: 'Português', nota: '80' },
        { name: 'Química', nota: '78' },
        { name: 'Biologia', nota: '92' },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '76' },
        { name: 'Português', nota: '90' },
        { name: 'Química', nota: '70' },
        { name: 'Biologia', nota: '80' },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '91' },
        { name: 'Português', nota: '85' },
        { name: 'Química', nota: '92' },
        { name: 'Biologia', nota: '90' },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '70' },
        { name: 'Português', nota: '70' },
        { name: 'Química', nota: '60' },
        { name: 'Biologia', nota: '50' },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '80' },
        { name: 'Português', nota: '82' },
        { name: 'Química', nota: '79' },
        { name: 'Biologia', nota: '75' },
      ],
    },
  ];
// Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.
const allNameStudents = [];

for (let index = 0; index < estudantes.length; index += 1 ) {
  if(estudantes[index].turno === 'Manhã') {
      
  }
}

console.log(allNameStudents); 
// [
//   'Jorge Silva',
//   'Jorge Santos',
//   'Maria Silveira',
//   'Natalia Castro',
//   'Wilson Martins'
// ]

// Com map e filter.
const allNameStudents1 = estudantes.filter((estudante) => (
    estudante.turno === 'Manhã')).map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);
  
  console.log(allNameStudents1);
  // [
  //   'Jorge Silva',
  //   'Jorge Santos',
  //   'Maria Silveira',
  //   'Natalia Castro',
  //   'Wilson Martins'
  // ]

// Exemplo6
const findStudent = (name, students) => {
    for (let index = 0; index < students.length; index += 1) {
      if (students[index].nome === name) {
        return students[index];
      }
    }
  };
  
  const reportStatus = (name, students) => {
    const getStudent = findStudent(name, students);
    const report = [];
    for (let index = 0; index < getStudent.materias.length; index += 1) {
      if (getStudent.materias[index].nota >= 60) {
        report.push(`${getStudent.materias[index].name} Aprovado`);
      } else {
        report.push(`${getStudent.materias[index].name} Reprovado`);
      }
    }
    return report;
  };
  
  console.log(reportStatus('Natalia', estudantes));
// [
//   'Matemática Aprovado',
//   'Português Aprovado',
//   'Química Aprovado',
//   'Biologia Reprovado'
// ]


// Buscar um estudante pelo nome e retornar a situação dele em cada matéria, com find e map:
const reportStatus1 = (name, students) => {
    const studentInfo = students.find((student) => student.nome === name);
    return studentInfo.materias.map((materia) => (
      `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
    ));
  };
  
  console.log(reportStatus1('Natalia', estudantes));
  // [
  //   'Matemática Aprovado',
  //   'Português Aprovado',
  //   'Química Aprovado',
  //   'Biologia Reprovado'
  // ]