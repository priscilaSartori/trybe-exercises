// Exemplo2
    // O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias:
const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).every((grade) => grade === 'Aprovado')
  );
  
  console.log(verifyGrades(grades)); // false

//   Para fixar
    // 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    return arr.every((person) => person.age >= minimumAge);
  }
  
  console.log(verifyAges(people, 18));


// Exercicio2 Aula ao Vivo
const pizzas1 = [
    {flavor: "Frango com catupiry", price: 12.20},
    {flavor: "Marguerita", price: 13.50},
    {flavor: "Gratinada", price: 15.32},
    {flavor: "Quatro Queijos", price: 13.63},
    ]

    // Retorne TRUE caso todas as pizzas tenham valor menor que 16.00 e FALSE caso contrario.
    const todosMenosQue16 = () => {
    let result = pizzas1.every((pizza) => {
    return pizza.price < 16;
    });
    return result;
    }
    console.log(todosMenosQue16())
    // Refatorando:
    const todosMenosQue161 = () => pizzas1.every((pizza) => pizza.price < 16);
    console.log(todosMenosQue161())

// Exercicio3 Aula ao Vivo
const users = [
    {firsName: "Homer", lastName: "Simpson", canDriver: true},
    {firsName: "Marge", lastName: "Simpson", canDriver: true},
    {firsName: "Bart", lastName: "Simpson", canDriver: true},
    {firsName: "Lisa", lastName: "Simpson", canDriver: true},
    {firsName: "Maggie", lastName: "Simpson", canDriver: true},
]
    // Verificar se todos os personagens podem dirigir
    const todosPodemDirigir = () => {
        return users.every( (user) => {
            return user.canDriver === true;
        });
    }
console.log(todosPodemDirigir());

    // Refatorando:
    const todosPodemDirigir1 = () => users.every( (user) => user.canDriver === true);
console.log(todosPodemDirigir1());