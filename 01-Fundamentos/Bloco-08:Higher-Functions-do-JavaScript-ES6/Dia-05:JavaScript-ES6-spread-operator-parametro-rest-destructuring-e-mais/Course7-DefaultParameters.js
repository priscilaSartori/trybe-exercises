// Exemplo 1
const greeting = (user) => console.log(`Welcome ${user}!`);
greeting(); // Welcome undefined!

// Resolvendo com if
const greeting1 = (user) => {
    const userDisplay = typeof user === 'undefined' ? 'pessoa usuária' : user;
    console.log(`Welcome ${userDisplay}!`);
  };
greeting1(); // Welcome pessoa usuária!

// Resolvendo com default
const greeting2 = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);
greeting2(); // // Welcome pessoa usuária!


// Para Fixar
// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.
const multiply = (number, value = 1) => {
    return number * value
};
    console.log(multiply(8)); // 8
