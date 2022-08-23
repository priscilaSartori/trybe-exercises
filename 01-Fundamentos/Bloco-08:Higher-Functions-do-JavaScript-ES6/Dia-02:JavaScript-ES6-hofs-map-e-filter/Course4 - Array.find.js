// Exemplo1
// Primeiro observe a função verifyEven. Ela verifica se o número recebido é par. Se sim, seu retorno será true; caso contrário, seu retorno é false.
// Quando a passamos como callback, o find executará a função para cada um dos elementos do array e retornará o primeiro elemento quando o retorno da função for true.

const numbers = [19, 21, 30, 3, 45, 22, 15];
const verifyEven = (number) => number % 2 === 0;
const isEven = numbers.find(verifyEven);
console.log(isEven); // 30
console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);
console.log(isEven2); // 30

// Para fixar
// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
const numbers2 = [19, 21, 30, 3, 45, 22, 15];
const findDivisibleBy3And5 = () => {
    return numbers2.find((number2) => number2 % 3 === 0 && number2 % 5 === 0);
}
console.log(findDivisibleBy3And5());

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];
const findNameWithFiveLetters = () => {
  return names.find((names) => names.length === 5)
}

console.log(findNameWithFiveLetters());

// 3 - Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    return musicas.find((musicas) => musicas.id === id)
  }
  
  console.log(findMusic('31031685'))

  // Exercicio Aula ao Vivo
  const users = [
    {firsName: "Homer", lastName: "Simpson", canDriver: true},
    {firsName: "Marge", lastName: "Simpson", canDriver: true},
    {firsName: "Bart", lastName: "Simpson", canDriver: false},
    {firsName: "Lisa", lastName: "Simpson", canDriver: false},
    {firsName: "Maggie", lastName: "Simpson", canDriver: false},
]

  // Verifica o primeiro personagem que não pode dirigir
  const primeiroQueNãoPodeDirigir = () => {
    return users.find((user) => {
      return user.canDriver === false;
    });
  }
  console.log(primeiroQueNãoPodeDirigir())

  // Refatorando:
  const primeiroQueNãoPodeDirigir1 = () => users.find((user) => user.canDriver === false);
  console.log(primeiroQueNãoPodeDirigir1())

  // traz o nome do primeiro personagem que não pode primeiroQueNãoPodeDirigir
  const primeiroQueNãoPodeDirigir2 = () => users.find((user) => user.canDriver === false).firsName;
  console.log(primeiroQueNãoPodeDirigir2())