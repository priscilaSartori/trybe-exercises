/**
 * Ordenar os jogadores em ordem alfabética
 */

const players = [
    'Dida',
    'Juan',
    'Lúcio',
    'Cafú',
    'Roberto Carlos',
    'Emerson',
    'Zé Roberto',
    'Ronaldinho',
    'Kaká',
    'Adriano',
    'Ronaldo',
];

// ordenando...
players.sort();
console.log(players);

// ordenando números
const numbers = [34, 12,21,45,10,1,3]
numbers.sort();
console.log(numbers);
// Resultado: [ 1, 10, 12, 21, 3, 34, 45]


const numbers2 = [34, 12,21,45,10,1,3]
numbers2.sort((a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
      return 1;
    }
    // a deve ser igual a b
    return 0;
  });
  console.log(numbers2);
  
// Resultado: [ 1,  3, 10, 12, 21, 34, 45]