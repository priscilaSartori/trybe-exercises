const multiplicaPorTres= require('./Course3 - Array.forEach');

describe('Testa a função multiplicaTres', () => {
    it('Verifica se é uma função', () => {
        expect(typeof multiplicaPorTres).toBe('function');
    })
    it('Multiplica por tres e imprime um array', () => {
        const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const multiplo = [3,  6,  9, 12, 15, 18, 21, 24, 27, 30];
        expect(multiplicaPorTres(numbers)).toEqual(multiplo);
    })
});