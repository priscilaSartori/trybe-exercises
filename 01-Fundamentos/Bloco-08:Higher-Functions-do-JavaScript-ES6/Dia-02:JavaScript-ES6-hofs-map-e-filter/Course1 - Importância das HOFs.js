// Exemplo 1
// Imagine que você tem um array de objetos. Cada objeto é um estudante com seu nome, nota e situação no curso. Para ser aprovado, ele precisa obter uma nota acima de 60. Como você pode ver, o objeto abaixo está desatualizado e precisa ser atualizado: ele não contém a informação acerca da aprovação. Para atualizá-lo, você provavelmente escreveria algo assim, utilizando loops:
const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    for (let index = 0; index < students.length; index += 1) {
      const student = students[index];
      if (student.grade >= 60) {
        student.approved = 'Aprovado';
      } else {
        student.approved = 'Recuperação';
      }
    }
  }
  verifyGrades();
  
  console.log(students);

//   Usando forEach, é assim que você faria a mesma coisa:
const students2 = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    students2.forEach((student, index) => {
      if (student.grade >= 60) {
        students2[index].approved = 'Aprovado';
      } else {
        students2[index].approved = 'Recuperação';
      }
    });
  }
  
  verifyGrades();
  
  console.log(students2);
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ]

//   Exemplo2
//   Queremos encontrar e imprimir no console o primeiro elemento de um array que satisfaça a uma determinada condição. Pode ser, por exemplo, encontrar o primeiro número que seja divisível por 5 em uma lista de números.
  const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
  let firstMultipleOf5;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 5 === 0) {
      firstMultipleOf5 = numbers[index];
      break;
    }
  }
  
  console.log(firstMultipleOf5);
  // 50  
//   Agora, a mesma coisa usando Array.find:
  const numbers2 = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
  const firstMultipleOf52 = numbers2.find((number) => number % 5 === 0);
  
  console.log(firstMultipleOf52);
  // 50

// Resultado:
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ]
