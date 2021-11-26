const fetchSimulator = require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

// Avisamos ao nosso arquivo que nossa função será simulada.
// Você irá aprender a criar essas simulações no bloco de Front-end.
window.fetch = jest.fn(fetchSimulator);

describe('Teste a função fetchCharacter', () => {
  it('', () => {});
});