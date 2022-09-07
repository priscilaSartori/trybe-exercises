// 7 - Para o próximo exercício, você vai sentir na pele o primeiro dia de um treinador Pokémon!
// No laboratório do Professor Carvalho, você é informado de que existem três pokémons disponíveis: Bulbasaur, Charmander e Squirtle.
// Complete a função handlePokemonSearch de modo que:
// Ao chamar a função getPokemonDetails com um pokémon existente, imprime no console a mensagem com os detalhes deste pokémon.
// Ao chamar a função getPokemonDetails com um pokémon não existente, imprime no console o erro.

const pokemons = [
    {
      name: 'Bulbasaur',
      type: 'Grama',
      ability: 'Raio Solar',
    },
    {
      name: 'Charmander',
      type: 'Fogo',
      ability: 'Lança Chamas',
    },
    {
      name: 'Squirtle',
      type: 'Água',
      ability: 'Jato de Água',
    },
  ];
  
  function getPokemonDetails(selectedPokemon, callback) { // 1. Adicionamos o parâmetro `selectedPokemon`
    const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);
  
    setTimeout(() => {
      if (foundPokemon === undefined) {
        return callback(new Error('Não temos esse pokémon para você :('), null);
      }
  
      const { name, type, ability } = foundPokemon;
  
      const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
  
      callback(null, messageFromProfOak);
    }, 2000);
  }
  
  const handlePokemonSearch = (error, message) => {
    // Insira a callback de tratamento
    if (error) { // 2, 3. Criamos o `if/else` com o parâmetro `error`
      console.log(error); // 4. Colocamos o console.log() para imprimir o erro
    } else {
      console.log(message);// 5. Colocamos o console.log() para imprimir a mensagem
    }
  };
  
  getPokemonDetails('Bulbasaur', handlePokemonSearch);

//   Solução:
// Colocamos o parâmetro selectedPokemon na função getPokemonDetails;
// Criamos um if/else dentro da função handlePokemonSearch;
// Colocamos o parâmetro error como condição do if;
// Colocamos um console.log(error) para imprimir o erro caso ele seja true; e
// Colocamos um console.log(message) para imprimir a mensagem caso o error seja false.