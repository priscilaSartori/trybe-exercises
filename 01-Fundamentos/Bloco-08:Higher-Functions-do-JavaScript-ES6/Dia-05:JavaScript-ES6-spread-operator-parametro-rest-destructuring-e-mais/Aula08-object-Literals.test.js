const { createSuperhero } = require('./08-object-literals');

describe('testa a função createSuperhero', () => {
  test('cria o superhero Bruce Wayne', () => {
    const response = {
      name: 'Bruce Wayne',
      superheroName: 'Batman',
      nickname: 'The Caped Crusader',
      powers: 'Determination and money'
    };

    expect(createSuperhero('Bruce Wayne', 'Batman', 'The Caped Crusader', 'Determination and money')).toEqual(response);
  });
});