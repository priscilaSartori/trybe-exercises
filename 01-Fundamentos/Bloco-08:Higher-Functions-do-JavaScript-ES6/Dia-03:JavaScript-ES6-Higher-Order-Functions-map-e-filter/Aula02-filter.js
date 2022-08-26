// Mostrar somente as pessoas que não podem dirigir, dentro de um array

const users = [
    {firstName: 'Homer', lastName: 'Simpsons', isDriver: true},
    {firstName: 'Marge', lastName: 'Simpsons', isDriver: true},
    {firstName: 'Bart', lastName: 'Simpsons', isDriver: false},
    {firstName: 'Lisa', lastName: 'Simpsons', isDriver: false},
    {firstName: 'Maggie', lastName: 'Simpsons', isDriver: false},
];

const filterNaoPodeDirigir = () => {
    return users.filter ( (user) => {
        return user.isDriver === false;
    })
}
console.log(filterNaoPodeDirigir())
// [
//   { firstName: 'Bart', lastName: 'Simpsons', isDriver: false },
//   { firstName: 'Lisa', lastName: 'Simpsons', isDriver: false },
//   { firstName: 'Maggie', lastName: 'Simpsons', isDriver: false }
// ]

const filterNaoPodeDirigir2 = () => {
    return users.forEach ( (user) => {
        return user.isDriver === false;
    })
}
console.log(filterNaoPodeDirigir2()) // ForEach não retorna nada, ele só pecorre o array => undefined

const filterNaoPodeDirigir3 = () => {
    return users.some ( (user) => {
        return user.isDriver === false;
    })
}
console.log(filterNaoPodeDirigir3()) // Alguem pode dirigir? true

const filterNaoPodeDirigir4 = () => {
    return users.every ( (user) => {
        return user.isDriver === false;
    })
}
console.log(filterNaoPodeDirigir4()) // Todos podem dirigir? false

const filterNaoPodeDirigir5 = () => {
    return users.find ( (user) => {
        return user.isDriver === false;
    })
}
console.log(filterNaoPodeDirigir5()) // { firstName: 'Bart', lastName: 'Simpsons', isDriver: false }

const filterNaoPodeDirigir6 = () => {
    return users.find ( (user) => {
        return user.isDriver === false;
    }).firstName;
}
console.log(filterNaoPodeDirigir6()) // Bart

const filterNaoPodeDirigir7 = () => {
    return users.filter ( (user) => {
        return user.isDriver === false;
    }).firstName
}
console.log(filterNaoPodeDirigir7()) // dot notation não acessa array => undefined

// REFATORANDO
const filterNaoPodeDirigir8 = () => users.filter ( (user) => user.isDriver === false);
console.log(filterNaoPodeDirigir8())

//DESAFIO
// CRIAR UM ARRAY SOMENTE COM OS NOMES DOS PERSONAGENS
//USE O MAP

