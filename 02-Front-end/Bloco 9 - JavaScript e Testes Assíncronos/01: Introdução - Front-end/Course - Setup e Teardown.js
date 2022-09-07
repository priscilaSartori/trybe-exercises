// Setup e Teardown
// Quando você está lidando com um ambiente de testes dentro do jest, é importante saber que existem três ciclos, sendo possível utilizar cada um deles para ajudar a configurar e realizar seus testes.
// Até esse momento, você viu como realizar os testes utilizando o Jest, que é apenas um dos ciclos possíveis. Vamos entender, a seguir, quais são os outros dois.
// Setup - é o primeiro ciclo. Ele ocorre antes de os testes serem executados. É uma fase inicial em que você pode definir algumas configurações.
// Testes - é considerado o segundo ciclo, ou seja, o momento em que ocorrem os testes. O ciclo que foi trabalhado nos blocos anteriores.
// Teardown - é o terceiro ciclo. Uma fase que ocorre após os testes serem executados.
// Maravilha! Agora que você sabe conceitualmente que existem esses ciclos dentro do ambiente de testes, você irá entender primeiro o porquê precisamos deles.

// Aqui temos a declaração de uma variável cities, que é uma lista de cidades;
// Há duas funções, addCity, que adiciona cidades ao array, e removeCity, que... Pasmem! Remove cidades desse array.
// Agora, você vai realizar dois testes, para saber se essas funções funcionam exatamente como deseja.

// cicles.test.js

// let cities = [];

// const addCity = (city) => {
//  cities.push(city);
// };

// const removeCity = (city) => {
//  cities = cities.filter((eachCity) => eachCity !== city);
// };

test('Testa a função addCity', () => {
    expect.assertions(4);
    addCity('Campinas');
    addCity('Goiania');
    addCity('Recife');
    expect(cities).toHaveLength(3);
    expect(cities).toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
  });
  
  test('Testa a função removeCity', () => {
    expect.assertions(4);
    removeCity('Campinas');
    expect(cities).toHaveLength(2);
    expect(cities).not.toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
  });

//   Como você observou, os testes tiveram sucesso significando que as funções estão funcionando.
// Mas... e se você criar outras funções, que também manipulam os dados das cidades?
// Resposta: Isso fará com que você tenha que escrever novos testes.
// Portanto, você teria que lembrar como o array de cidades ficou após o último teste, para poder continuar do ponto onde parou, certo?
// Imagine quanto tempo você perderia se tivesse uma aplicação com dezenas de funções.
// Os ciclos de setup e teardown existem justamente para lidar com esse tipo de situação.
// Para entender na prática como cada ciclo funciona, vamos fazer com que uma cidade seja adicionada ao array cities antes de cada teste.
// Mas, antes de escrever o código, responda essa pergunta: se vamos executar um código antes dos testes, então em qual ciclo essa etapa deve estar?
// Quando executamos algum código ou definimos alguma configuração antes de rodar o teste em si, estamos usando a etapa de Setup.
// O Jest possui a função beforeEach, que é utilizada para executar um código antes de cada teste. Vamos usar essa função a atualizar os testes que tínhamos anteriormente:

// cicles.test.js

// let cities = [];

// const addCity = (city) => {
// cities.push(city);
// };

// const removeCity = (city) => {
// cities = cities.filter((eachCity) => eachCity !== city);
// };

beforeEach(() => {
    cities = [...cities, 'Pindamonhangaba'];
  });
  
  
  test('Testa a função addCity utilizando o beforeEach', () => {
    expect.assertions(5);
    addCity('Campinas');
    addCity('Goiania');
    addCity('Recife');
    expect(cities).toHaveLength(4);
    expect(cities).toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
    expect(cities).toContain('Pindamonhangaba');
  });
  
  test('Testa a função removeCity utilizando o beforeEach', () => {
    expect.assertions(5);
    removeCity('Campinas');
    expect(cities).toHaveLength(4);
    expect(cities).not.toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
    expect(cities).toContain('Pindamonhangaba');
    console.log(cities);
  });

//   No código acima, a função beforeEach roda antes de cada um dos testes, ou seja, não importa quantos testes sejam criados, a função rodará antes de cada um deles, para definir as suas configurações.
// Por isso, a cidade Pindamonhangaba é adicionada ao array cities antes de cada teste.
// No segundo teste foi colocado um console.log(cities), para que seja possível ver o conteúdo do array ao final do segundo teste:


// Reparou que a cidade Pindamonhangaba foi adicionada duas vezes no array? Isso acontece pois temos dois testes nesse arquivo. Se houvessem mais testes, a cidade seria repetida mais vezes.
// E o que podemos fazer para evitar que o que é feito em um teste "vaze" para o outro? Podemos limpar nosso array ao final de cada teste.
// E, antes de escrever o código para fazer isso, reflita novamente: se vamos executar um código depois dos testes, então em qual ciclo essa etapa deve estar?
// Quando executamos algum código ou limpamos alguma configuração depois de rodar o teste, estamos usando a etapa de Teardown.
// O Jest possui a função afterEach, que é executada após cada teste. Vamos implementar ela e atualizar nossos testes:
// cicles.test.js

// let cities = [];

// const addCity = (city) => {
// cities.push(city);
// };

// const removeCity = (city) => {
// cities = cities.filter((eachCity) => eachCity !== city);
// };

// beforeEach(() => {
//  cities = [...cities, 'Pindamonhangaba'];
// });

afterEach(() => {
    cities = [];
  });
  
  test('Testa a função addCity utilizando o beforeEach', () => {
    expect.assertions(5);
    addCity('Campinas');
    addCity('Goiania');
    addCity('Recife');
    expect(cities).toHaveLength(4);
    expect(cities).toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
    expect(cities).toContain('Pindamonhangaba');
  });
  
  test('Testa a função removeCity utilizando o beforeEach', () => {
    expect.assertions(2);
    removeCity('Pindamonhangaba');
    expect(cities).toHaveLength(0);
    expect(cities).not.toContain('Pindamonhangaba');
  });
//   Repare que, como estamos limpado o array cities depois de cada teste com o afterEach, as cidades que foram adicionadas no teste da função addCity não estão mais presentes no teste da função removeCity. A única cidade presente no array no segundo teste é Pindamonhangaba, já que ela sempre é adicionada antes de cada teste pelo beforeEach.
// Utilizando beforeEach e afterEach junto com describe
// Agora, se você tem um bloco de describe agrupando os testes e o beforeEach ou afterEach estiverem dentro desse describe, ele rodará apenas dentro dos testes que estão nesse describe, ou seja, se criarmos um segundo describe, aquele beforeEach e afterEach que estão no primeiro describe não serão rodados antes e/ou depois dos testes do segundo.
// Para visualizar melhor, veja outro exemplo dentro do mesmo contexto.
// cicles.test.js

// let cities = [];

// const addCity = (city) => {
// cities.push(city);
// };

// const removeCity = (city) => {
// cities = cities.filter((eachCity) => eachCity !== city);
// };

describe('Agrupa o primeiro bloco de testes', () => {
    beforeEach(() => {
      cities = [...cities, 'Pindamonhangaba'];
    });
  
    afterEach(() => {
      cities = [];
    });
  
    test('Testa a função addCity dentro do primeiro bloco de testes', () => {
      expect.assertions(5);
      addCity('Campinas');
      addCity('Goiania');
      addCity('Recife');
      expect(cities).toHaveLength(4);
      expect(cities).toContain('Campinas');
      expect(cities).toContain('Goiania');
      expect(cities).toContain('Recife');
      expect(cities).toContain('Pindamonhangaba');
    });
  
    test('Testa a função removeCity dentro do primeiro bloco de testes', () => {
      expect.assertions(2);
      removeCity('Pindamonhangaba');
      expect(cities).toHaveLength(0);
      expect(cities).not.toContain('Pindamonhangaba');
    });
  });
  
  describe('Agrupa o segundo bloco de testes', () => {
    beforeEach(() => {
      cities = [...cities, 'Tangamandapio'];
    });
  
  
    afterEach(() => {
      cities = [];
    });
  
    test('Testa a função addCity dentro do segundo bloco de testes', () => {
      expect.assertions(5);
      addCity('Campinas');
      addCity('Goiania');
      addCity('Recife');
      expect(cities).toHaveLength(4);
      expect(cities).toContain('Campinas');
      expect(cities).toContain('Goiania');
      expect(cities).toContain('Recife');
      expect(cities).toContain('Tangamandapio');
    });
  
    test('Testa a função removeCity dentro do segundo bloco de testes', () => {
      expect.assertions(3);
      removeCity('Tangamandapio');
      expect(cities).toHaveLength(0);
      expect(cities).not.toContain('Tangamandapio');
      expect(cities).not.toContain('Pindamonhangaba');
    });
  });

//   Dessa maneira, você pode organizar uma configuração para cada bloco de testes dentro de um describe.
// Uma observação importante é que, para facilitar o entendimento, nós utilizamos funções síncronas para entender como usar o setup e o teardown, porém elas geralmente são utilizadas em funções assíncronas.
  