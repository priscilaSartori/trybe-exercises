//Exercício 1
// 🚀 Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.
// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.

// Solução:
// Primeiro passo: Modifique a estrutura da função para que ela seja uma arrow function.
// Segundo passo: Altere as concatenações para template literals.
// Terceiro passo: Altere a variável do tipo var, ifScope para let e elseScope, para const.
// Dessa forma elas não vazam o escopo do if e else.
// Quarto passo: Retire o console.log que está fora do if/else
// Agora que as variáveis ifScope e elseScope foram alteradas para respeitarem o escopo, você deve retirar o console.log que está fora do if/else para que seu código consiga ser executado sem nenhum erro, pois essas variáveis não são mais acessíveis fora de seu escopo.

const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true);

//Exercício 2
//   🚀 Crie uma função que retorne um array em ordem crescente.
// Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.

// Solução 1:
// Primeiro passo: Crie a função sortOddsAndEvens() que receberá um array por parâmetro.
// Segundo passo: Utilize uma primeira estrutura de repetição for que fará a iteração sobre o array passado por parâmetro.
// Terceiro passo: Utilize agora uma segunda estrutura de repetição for, aninhada à primeira, que também fará a iteração sobre o array.
// Quarto passo: Crie então uma estrutura condicional if/else no escopo do segundo for que fará a comparação dos valores das posições dos respectivos index, sendo o primeiro loop for começando pelo index 1 e o segundo loop for começando pelo index 0.
// Quinto passo: Retorne o resultado do array ordenado.
// Sexto passo: Imprima no terminal o retorno da função.

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  const sortOddsAndEvens = (array) => {
    for (let index = 1; index < array.length;index += 1) {
        for (let index2 = 0; index2 <   index; index2 += 1) {
            if (array[index] < array[secondIndex]) {
                let position = array[index];
                array[index] = array[secondIndex];
                array[secondIndex] = position;
            }  
        }
    }
    return array;
}
console.log(sortOddsAndEvens(array));

//  Solução 2:
// Primeiro passo: Reatribua os valores de cada posição do array oddsAndEvens, fazendo com que os números fiquem ordenados de forma crescente.
// Segundo passo: Armazene o valor retornado pela função sortOddsAndEvens em uma variável.
// Terceiro passo: Agora você deve utilizar template literals para exibir a mensagem desejada.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens = () => {  
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;

    return oddsAndEvens;
  };

  const sortedArray = sortOddsAndEvens(); 
  console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`);

// Bônus array.sort()
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = (array) => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
};

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`);

// array.sort com sort em uma linha.
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);

// Crie uma função que substitua a letra 'x' em uma frase.
// O nome da função deverá ser substituaX;
// A função deverá receber um nome por parâmetro;
// Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
// A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
// Exemplo:
// Parâmetro: 'Bebeto'
// Retorno: 'Tryber Bebeto aqui!'
// Spoiler: O método split() pode ser utilizado de diferentes maneiras, como separar as palavras de um texto.

// Primeiro passo: Crie a função que irá receber um nome por parâmetro e crie a constante frase dentro dela.
// Segundo passo: Transforme a string armazenada na constante frase em um array.
// Terceiro passo: Crie uma estrutura de repetição para percorrer a variável fraseArray.
// Quarto passo: Crie uma estrutura condicional
// Verifique se a variável fraseArray na posição do index é igual a x;
// Caso seja, substitua o valor da variável fraseArray na posição do index pelo nome passado por parâmetro.
// Quinto passo: Transforme a variável fraseArray em uma string e a retorne.

const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split(' ');
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === 'x') {
      fraseArray[index] = nome;
    }
  }  
  return fraseArray.join(' ');
};

console.log(substituaX('Bebeto'));


// Crie uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
// O nome da função deverá ser minhasSkills;
// A função deverá receber o retorno da Função 1 - substituaX por parâmetro;
// Declare dentro da função uma variável com o nome skills, do tipo const;
// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
// Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
// Exemplo de retorno:
// Tryber Bebeto aqui!
// Minhas três principais habilidades são:
// JavaScript
// HTML
// CSS

const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split(' ');
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === 'x') {
      fraseArray[index] = nome;
    }
  }  
  return fraseArray.join(' ');
};

(substituaX('Bebeto'));

const minhasSkills = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let resultado = `
  ${func}

  Minhas três principais habilidades são:`;

  for (let index = 0; index < skills.length; index += 1) {
    resultado = `${resultado}
    - ${skills[index]}`; 
  }
  return resultado;
};

console.log(minhasSkills(substituaX('Bebeto')));