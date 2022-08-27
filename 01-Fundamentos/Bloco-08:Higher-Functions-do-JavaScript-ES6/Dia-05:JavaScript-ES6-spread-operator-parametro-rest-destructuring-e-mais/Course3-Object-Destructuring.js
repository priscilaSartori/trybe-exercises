// Exemplo 1
const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas


// Exemplo 2
// definindo o objeto
const character = {
    name1: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name2: 'Tatooine',
      population: '200000',
    },
  };

// desestruturando o objeto:
const { name1, age, homeWorld: { name2: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name1}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);


// Exemplo 3
const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };
  
const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


// Exemplo 4
const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  
const { a: name2, b: classAssigned, c: subject } = student;

console.log(name2); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

const name3 = student.a;
console.log(name3); // Maria

const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
  };  
printProductDetails(product); 
// Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas


// Para fixar
// 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };
  const userJobInfos = {...user, ...jobInfos}
  console.log(userJobInfos)
//{
//   name: 'Maria',
//   age: 21,
//   nationality: 'Brazilian',
//   profession: 'Software engineer',
//   squad: 'Rocket Landing Logic',
//   squadInitials: 'RLL'
// }

//   2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.
// Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"
const apresentation = {
    name4: 'Maria',
    age1: 21,
    nationality: 'Brazilian',
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL'
}
const {name4, age1, nationality, profession, squad, squadInitials} = apresentation;
console.log(`Hi, my name is ${name4}, I'm ${age1} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

