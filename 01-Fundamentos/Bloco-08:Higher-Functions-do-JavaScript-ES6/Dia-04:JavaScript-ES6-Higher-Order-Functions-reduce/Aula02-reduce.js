// Somando os numeros pares do array com reduce
// USANDO REDUCE COM IF
const numbers = [2, 3, 4, 6 ,7, 12, 24];
const sumEven = (array) => {
    return array.reduce((acc, curr) => {
        if(curr % 2 !== 0) {
            return acc + 0;
        }
        return acc + curr;
    },0)
}
console.log(sumEven(numbers)); // 48

//USANDO REDUCE COM FILTER
const sumEven1 = (array) => {
    const evenNumbers = array.filter ( (number) => {
        return number % 2 === 0;
    })
    return evenNumbers.reduce((acc, curr) => {
        return acc + curr;
    },0)
}
console.log(sumEven1(numbers)); //48

//REFATORANDO
const sumEven2 = (array) => array
.filter ( (number) => number % 2 === 0)
.reduce((acc, curr) => acc + curr,0);
console.log(sumEven2(numbers));