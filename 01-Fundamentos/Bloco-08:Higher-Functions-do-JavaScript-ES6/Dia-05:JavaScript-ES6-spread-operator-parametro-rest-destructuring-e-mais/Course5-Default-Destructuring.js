/ Exemplo 1
const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality } = person;
  console.log(nationality) //o valor retornado é undefined, pois essa propriedade não existe.


// Exemplo 2
  const person1 = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
const { nationality1 = 'Brazilian' } = person1;
console.log(nationality1); // Brazilian


// Exemplo 3
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;
console.log(x); // 1
console.log(y); // 2
console.log(z); // 0


// Para Fixar
// Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined. Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian.
const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person2 = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person2));
