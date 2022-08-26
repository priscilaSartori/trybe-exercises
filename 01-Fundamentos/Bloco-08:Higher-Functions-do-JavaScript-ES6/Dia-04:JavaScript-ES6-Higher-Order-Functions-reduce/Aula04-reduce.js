// Reduza o array em um objeto conforme o exemplo abaixo:

// {
//     'Adriano Imperador': 'didico@futebol.br',
//     'Marta vieira da Silva': 'rainhamarta@futebol.br',
//     'Ronaldinho Gaúcho': 'bruxo@futebol.br',
//     'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
// }

const players = [
    {fullName: 'Adriano Imperador', email: 'didico@futebol.br'},
    {fullName: 'Marta vieira da Silva', email: 'rainhamarta@futebol.br'},
    {fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br'},
    {fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br'},
]

const newPlayers = (array) => {
    return array.reduce((acc, curr) => {
        acc[curr.fullName] = acc.email;
        return acc;
    }, {})
};
console.log(newPlayers(players));


// Para acrescentar nome:
const theBestPlayes = {
    'Adriano Imperador': 'didico@futebol.br',
    'Marta vieira da Silva': 'rainhamarta@futebol.br',
    'Ronaldinho Gaúcho': 'bruxo@futebol.br',
    'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
}
theBestPlayes['Rods Rosa'] = 'rods@futebol.br';
console.log(theBestPlayes)
