const filterImpar = require('./Aula01-filter');

describe('Testa a função filterImpar', () => {
   it('Verifica se é uma função', () => {
    expect(typeof filterImpar).toBe('function');
    });
    
    it('Retorna um array contendo os números ímpares', () => {
        const numbers = [1, 2, 3, 4, 5];
        const impares = [1, 3, 5];
        expect(filterImpar(numbers)).toEqual(impares);
    })
});

