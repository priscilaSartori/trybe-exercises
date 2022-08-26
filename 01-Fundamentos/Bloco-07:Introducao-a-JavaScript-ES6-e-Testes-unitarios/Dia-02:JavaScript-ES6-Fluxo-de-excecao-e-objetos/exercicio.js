// Crie um fluxo para quando nosso código é executado com sucesso, representado pelo bloco try, que tenta fazer a soma de dois valores. Esse bloco chama a função recém-criada verifyIsNumber, que verifica se os parâmetros passados são números. Quando se depara com um valor que não é um número, o código lança um erro com o throw, que é capturado pelo catch no fluxo de exceção, através da variável error (aqui podemos usar qualquer nome). Dentro do catch retornamos a chave error.message, uma propriedade do objeto nativo Error que contém a mensagem de erro criada anteriormente.

const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  };
  
  const sum = (value1, value2) => {
    try {
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      return error.message;
    }
  };
  
  console.log(sum(2, '3'));