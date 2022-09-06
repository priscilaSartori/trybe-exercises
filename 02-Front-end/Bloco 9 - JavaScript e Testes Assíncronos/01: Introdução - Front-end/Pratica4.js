// 4 - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature de forma que:
// A função sendMarsTemperature imprima no console o seguinte texto: "A temperatura de Marte é: temperaturaAtual graus celsius" onde, temperaturaAtual é o valor recebido da função getMarsTemperature; e
// A mensagem deve ser impressa no console depois de no máximo 5 segundos.
// Dica: utilize a função messageDelay para gerar o tempo de espera necessário

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
    setTimeout(() => console.log(`"A temperatura de Marte é: ${getMarsTemperature()} graus celsius"`), 4000);
}

sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo

// Solução:
// Criamos a função sendMarsTemperature;
// Dentro da função sendMarsTemperature, recebemos a temperatura pela função getMarsTemperature e armazenamos seu retorno na variável currentTemperature;
// Fazemos um setTimeout colocando a função messageDelay como o tempo de espera; e
// Colocamos um console.log() dentro de nosso setTimeout com a mensagem esperada.