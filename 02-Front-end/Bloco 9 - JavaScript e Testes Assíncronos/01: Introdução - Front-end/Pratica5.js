// 5 - Agora que você fez a função que envia a temperatura de Marte, vamos utilizar essa temperatura para realizar outras operações. No código abaixo, temos as funções temperatureInFahrenheit e greet. Elas irão utilizar a temperatura obtida pela função getMarsTemperature para realizar nossas operações. Escreva a função sendMarsTemperature de forma que:
// A função sendMarsTemperature receba uma callback;
// Dica: Essa callback será uma de nossas funções: temperatureInFahrenheit ou greet;
// A função sendMarsTemperature execute essa callback depois de no máximo 5 segundos.
// Dica: Lembre-se de nossa função messageDelay para gerar o tempo de espera necessário.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

const sendMarsTemperature = (onSuccess) => { // 1. Criamos a função `sendMarsTemperature`
const currentTemperature = getMarsTemperature(); // 2. Armazenamos a temperatura
setTimeout(() => onSuccess(currentTemperature), messageDelay()); // 3, 4, 5. Fazemos um `setTimout` utilizando a callback `onSuccess` e a variável `currentTemperature`
};

sendMarsTemperature(temperatureInFahrenheit); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

sendMarsTemperature(greet); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo

// Solução:
// Criamos a função sendMarsTemperature que vai receber uma callback, neste caso a callback se chama onSuccess;
// Dentro da função sendMarsTemperature, recebemos a temperatura pela função getMarsTemperature e armazenamos seu retorno na variável currentTemperature;
// Fazemos um setTimeout colocando a função messageDelay como o tempo de espera;
// Colocamos nossa callback onSuccess dentro de nosso setTimeout; e
// Colocamos nossa variável currentTemperature como parâmetro de nossa callback onSuccess.