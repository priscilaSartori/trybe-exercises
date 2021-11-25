const fetchCharacter = async (id) => {
  // Recebemos como parâmetro o id
  try {
    const URL = `https://www.superheroapi.com/api.php/4192484924171229/${id}`;
    // Aguardamos a promise do fetch ser resolvida
    const promiseFetch = await fetch(URL)
    // Aguardamos a promise do json ser resolvida
    const results = await promiseFetch.json();

    //Retornamos o resultado da nossa requisição
    return results;
  } catch (e) {
    // Caso algo aconteça e nossa requisição não seja realizada com sucesso
    // capturamos e retornamos essa exceção.
    return e;
  }
};

// const fetchCharacter = async (id) => {
//   const URL = `https://www.superheroapi.com/api.php/4192484924171229/${id}`;
//   const promise = fetch(URL)
//     .then((response) => response.json())
//     .then((result) => result)
//     .catch((e) => e);

//     return promise;
// };

if (typeof module !== 'undefined') {
  module.exports = {
    fetchCharacter,
  };
}
