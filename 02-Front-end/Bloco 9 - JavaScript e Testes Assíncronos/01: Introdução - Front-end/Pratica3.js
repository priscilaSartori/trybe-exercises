// 3 - A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique a função getPlanet, de forma que Marte seja impresso assincronamente, após 4 segundos.

const getPlanet = () => {
    const mars = {
      name: 'Mars',
      distanceFromSun: {
        value: 227900000,
        measurementUnit: 'kilometers',
      },
    };
    setTimeout(() => console.log('Returned planet: ', mars), 4000);// 1. Adiciona `setTimeout`
  };
  
  getPlanet(); // Imprime Marte depois de 4 segundos

//   Solução:
// Colocamos nosso console.log() dentro de um setTimeout com 4000 milissegundos de tempo de espera.