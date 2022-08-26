// Crie uma função que faça a soma dos numeros do array
const numbers = [2, 3, 4, 6 ,7, 12, 24];
const sum = (array) => {
    let resultado = 0;
    for (let index = 0; index < array.length; index += 1) {
        resultado += array[index];
    }
    return resultado;
}
console.log(sum(numbers)); //58

// USANDO O REDUCE
const sum1 = (array) => {
    return array.reduce( (acc, curr) => {
        console.log(`Acc: ${acc} --> CurrValue: ${curr}` )
        // Acc: 0 --> CurrValue: 2
        // Acc: 2 --> CurrValue: 3
        // Acc: 5 --> CurrValue: 4
        // Acc: 9 --> CurrValue: 6
        // Acc: 15 --> CurrValue: 7
        // Acc: 22 --> CurrValue: 12
        // Acc: 34 --> CurrValue: 24
        return acc + curr
    },0)
}
console.log(sum1(numbers)); //58

//REFATORANDO
const sum2 = (array) => array.reduce( (acc, curr) => acc + curr,0);
console.log(sum2(numbers)); //58

module.exports = sum;
