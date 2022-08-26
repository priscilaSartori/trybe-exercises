// Mostrar somente os numeros impares, dentro de um array

// const numbers = [1, 2, 3, 4, 5];
// USANDO FOR
const filterImpar = (numbers) => {
    const impares = [];

    for (let number of numbers) {
        if (number % 2 !== 0) {
            impares.push(number)
        }
    }
    return impares;
};

// USANDO FILTER
const filterImpar1 = (numbers) => {
    return numbers.filter( (number) => {
        return number % 2 !== 0;
    })
}

// REFATORANDO
const filterImpar2 = (numbers) => numbers.filter( (number) => number % 2 !== 0);


modulo.exports = filterImpar;