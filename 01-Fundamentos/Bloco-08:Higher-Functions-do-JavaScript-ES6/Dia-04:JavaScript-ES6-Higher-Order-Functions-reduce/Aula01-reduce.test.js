const sum = require('./Aula01-reduce');

describe('Testa a função sum', () => {
    it('Verifica se é uma função', () => {
        expect(typeof sum), toBe('function');
    });

    it ('Soma os valores do array', () => {
        const numbers = [2, 3, 4, 6 ,7, 12, 24]; 
        expect(sum(numbers)).toBe(58);
    })
});