// 2 - Observe o código abaixo e responda: qual é a ordem de finalização de execução das linhas comentadas?

// callbacks-para-fixar-02.js

const userFullName1 = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
const userNationality1 = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser1 = (callback) => { // 1. Adiciona o parâmetro
  setTimeout(() => {
    const user = {
      firstName: 'Ivan',
      lastName: 'Ivanovich',
      nationality: 'Russo',
    };

    // Dica: use esse `console.log()` abaixo para imprimir o resultado na tela.
    console.log(callback(user)); // 2, 3. Adiciona a callback e seu parâmetro
  }, delay());
};

getUser1(userFullName1); // deve imprimir "Olá! Meu nome é Ivan Ivanovich" depois de um certo tempo
getUser1(userNationality1); // deve imprimir "Ivan é Russo" depois de um certo tempo

// Solução:
// A ordem de finalização das linhas comentadas é: A, C e, por fim, B.