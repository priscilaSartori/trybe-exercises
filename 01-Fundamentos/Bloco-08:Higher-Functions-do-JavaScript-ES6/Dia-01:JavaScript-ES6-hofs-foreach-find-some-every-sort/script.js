// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

// Solução:
// Primeiro Passo: Começamos criando nossa função. Sabemos que recebemos o nome completo por parâmetro e que ele deve ser parte do nosso retorno. Vamos começar por aí.
// Segundo Passo: Podemos agora nos preocupar com o email. O enunciado diz que ele deve ser gerado a partir do nome passado como parâmetro. Vamos separá-lo em itens divididos pelo espaço utilizando o split e então juntá-lo novamente utilizando o caractere "_" utilizando o join. Depois podemos passá-lo no retorno usando template literals e completando o domínio do email.
// Terceiro Passo: Basta agora passarmos nossa função como parâmetro numa HOF que executará essa função para cada chave id presente

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

const employeeGenerator = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().split(' ').join('_');
  return { nomeCompleto, email: `${email}@trybe.com` };
};

console.log(newEmployees(employeeGenerator));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

// Solução:
// Primeiro Passo: Vamos criar uma callback que verifica se os números são os mesmos.
// Segundo Passo: Vamos começar a trabalhar em nossa HOF, iniciando pelo gerador do número aleatório.
// Terceiro Passo: Vamos utilizar nossa callback, já temos o parâmetro number dentro do escopo da função. Precisamos só dizer à Hof que ela receberá por parâmetro nossa callback e também o número escolhido.
// Quarto Passo: Nossa função já retorna casos verdadeiros e falsos, vamos atribuir nossas mensagens à esses cenários e retorná-las.

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));

// 3 - Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (Gabarito);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for "N.A");
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

// Solução:
// Primeiro Passo: Vamos criar nossa callback. Ela deve verificar se a resposta do aluno está certa, errada ou inexistente, e assim atribuir a devida pontuação.
// Segundo Passo: Iniciaremos nossa HOF, ela receberá os mesmos parâmetros da callback mais a callback em si. Para contagem dos pontos teremos um contador que será alterado por um loop for que irá percorrer pelo array de respostas corretas. Vamos começar com essa estrutura.
// Terceiro Passo: A cada iteração utilizaremos nossa callback. Como parâmetros utilizamos o index do loop para compararmos as respostas corretas com as do estudante.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let counter = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    counter += actionReturn;
  }
  return `Resultado final: ${counter} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

// Bônus
// Parte I - Game Actions Simulator
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo.

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
// 2 - Crie uma função que retorna o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
// Parte II
// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions. O objeto será composto por ações do jogo e cada ação é por denifição uma HOF, pois neste caso, são funções que recebem como parâmetro outra função.

// Solução:
// Primeiro Passo: Faremos uma fórmula básica para o dano do dragão. Precisamos multiplicar um número aleatório pelo seu atributo strength para calcular o valor máximo. Vamos definir os dois valores de dano mínimo e máximo.
// Segundo Passo: Vamos adicionar nosso retorno. Caso nossa multiplicação seja menor do que 15, devemos retornar 15, senão retornamos o valor da multiplicação.
// Terceiro Passo: Vamos definir os valores de dano máximo e mínimo.
// Quarto Passo: Se o valor da multiplicação for menor que o dano mínimo retornamos o dano mínimo, senão retornamos o dano máximo.
// Quinto Passo: Vamos começar definindo minDmg, maxDmg, mageMana e o resultado caso o mago não tenha 15 de mana.
// Sexto Passo: Agora vamos criar o caso de dano se o mago tiver mana o suficiente. A lógica para aplicar o dano é a mesma dos outros personagens até então.

const mageAttack = (mage) => {
    const mageMana = mage.mana;
    const minDmg = mage.intelligence;
    const maxDmg = minDmg * 2;
    const turnStats = {
      manaSpent: 0,
      damageDealt: 'Not enough mana...',
    };
  
    if (mageMana > 15) {
      mageDmg = minDmg < maxDmg ? maxDmg : minDmg
      turnStats.manaSpent = 15;
      turnStats.damageDealt = mageDamage;
      return turnStats;
    }
    return turnStats;
  };

// 1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior.
// 2 - Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor das chaves damage e mana do mage.
// 3 - Crie a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do monstro dragon. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disto ela também deve atualizar o valor da chave damage do monstro.
// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.

// Solução:
// Primeiro Passo: Devemos criar um objeto game actions que terá o turno do guerreiro com uma função. O parâmetro passado deverá ser nossa callback de dano do guerreiro. Dentro dela, executamos a função passando um objeto que representa o guerreiro. Subtraímos de dragon.healthPoints o resultado de warriorAttack. Por fim vamos atribuir o dano à uma chave de dano do warrior. Assim podemos trabalhar com estatísticas do turno depois.
// Segundo Passo: Seguindo o mesmo padrão da chave que criamos para o turno do guerreiro. A única diferença é que devemos subtrair a mana gasta do total da mana do mago.
// Terceiro Passo: Vamos fazer o mesmo passo que os anteriores. Porém o dragão dá dano em área, acertando tanto o mago quanto o guerreiro.
// Quarto Passo: Basta fazer uma callback simples que retorna nosso objeto battleMembers e adicioná-la à gameActions.

const gameActions = {
    warriorTurn: (warriorAttack) => {
      const warriorDamage = warriorAttack(warrior);
      warrior.damage = warriorDamage;
      dragon.healthPoints -= warriorDamage;
    },
    mageTurn: (mageAttack) => {
      const mageTurnStats = mageAttack(mage);
      const mageDamage = mageTurnStats.damageDealt;
      mage.damage = mageDamage;
      mage.mana -= mageTurnStats.manaSpent;
      dragon.healthPoints -= mageDamage;
    },
    dragonTurn: (dragonAttack) => {
      const dragonDamage = dragonAttack(dragon);
      mage.healthPoints -= dragonDamage;
      warrior.healthPoints -= dragonDamage;
      dragon.damage = dragonDamage;
    },
    turnResults: () => battleMembers,
  };
  
  gameActions.warriorTurn(warriorAttack);
  gameActions.mageTurn(mageAttack);
  gameActions.dragonTurn(dragonAttack);
  console.log(gameActions.turnResults());
