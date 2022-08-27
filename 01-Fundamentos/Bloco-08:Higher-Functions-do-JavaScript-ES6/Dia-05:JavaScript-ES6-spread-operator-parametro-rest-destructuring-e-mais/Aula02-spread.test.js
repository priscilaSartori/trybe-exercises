const { awesomeBooks } = require("./Aula02-spread")

describe('Testa a união de dois arrays', () => {
    test('awesomeBooks é igual a união de horrorBooks e scifiBooks', () => {
        expect(awesomeBooks).toEqual(['It','The Shining','i, Robot','Caves of Steel','The End of Eternity'])
    });
});