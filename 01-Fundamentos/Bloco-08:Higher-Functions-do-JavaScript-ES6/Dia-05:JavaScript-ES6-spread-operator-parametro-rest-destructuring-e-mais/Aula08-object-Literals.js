// Abbreviation object literal
// Receber um conjunto de strings e retornas um objeto

// const response = {
//   name: 'Bruce Wayne',
//   superheroName: 'Batman',
//   nickname: 'The Caped Crusader',
//   powers: 'Determination and money'
// };

// const createSuperhero = (name, superheroName, nickname, powers) => {
//   return {
//     name: name,
//     superheroName: superheroName,
//     nickname: nickname,
//     powers: powers
//   };
// }

// OBJECT LITERALS
const createSuperhero = (name, superheroName, nickname, powers) => {
    return {
      name,
      superheroName,
      nickname,
      powers
    };
  }
  
  console.log(createSuperhero('Bruce Wayne', 'Batman', 'The Caped Crusader', 'Determination and money'));
  
  module.exports = { createSuperhero };