// sumAll([1, 2]) ===> 3
// sumAll([1, 2, 3]) ===> 6
// sumAll([1, 2, 3, 4]) ===> 10

const sumAll = (values) => {
  let sum = 0;

  values.forEach((value) => {
    sum += value;
  });

  return sum;
};
  console.log( sumAll([1, 2]) ); // os parâmetros são um array
  console.log( sumAll([1, 2, 3]) );
  console.log( sumAll([1, 2, 3, 4]) );

// COM REDUCE
const sumAll1 = (...values) => {
    return values.reduce( (acc, curr) => {
      return acc + curr;
    } );
  }
  
  console.log( sumAll1(1, 2) ); // os parâmetros são um array
  console.log( sumAll1(1, 2, 3) );
  console.log( sumAll1(1, 2, 3, 4) );
  
  
  module.exports = { sumAll }