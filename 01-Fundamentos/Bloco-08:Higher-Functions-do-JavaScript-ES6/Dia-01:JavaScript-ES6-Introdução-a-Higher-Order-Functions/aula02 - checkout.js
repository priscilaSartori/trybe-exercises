const discount20 = (total) => 20;
const discount15Percent = (total) => total * 0.15; 

const checkout = (itemsArray, callback) => {
    // calcula o valor total
    let total = 0;
    for (let index = 0; index < itemsArray.length; index += 1) {
        const item = itemsArray[index];
        total = total + item;
    }

    // aplica os descontos
    total -= callback(total); 

    return total;
}

/* Execução */
const itemsPrice = [10, 12, 31, 5, 2];

console.log(checkout(itemsPrice, discount20));
console.log(checkout(itemsPrice, discount15Percent));

// descontos aleatórios com função anonima já na hofs.
console.log(checkout(itemsPrice, (total) => {
    return total * Math.random()
}))

// refatorando
console.log(checkout(itemsPrice, (total) => total * Math.random()));

console.log(checkout(itemsPrice, (total) => parseInt(total * Math.random())));

