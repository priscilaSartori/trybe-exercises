//Um ou dois arrays
const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['i, Robot', 'Caves of Steel', 'The End of Eternity'];

// Usando o for
let awesomeBooks = [];
for (let index = 0; index < horrorBooks.length;index += 1) {
    awesomeBooks.push(horrorBooks[index])
}
for (let index = 0; index < scifiBooks.length;index += 1) {
    awesomeBooks.push(scifiBooks[index])
}
console.log(awesomeBooks)
// It,The Shining,i, Robot,Caves of Steel,The End of Eternity

// Usando o ForEach
let awesomeBooks1 = [];
horrorBooks.forEach( (horror) => awesomeBooks1.push(horror));
scifiBooks.forEach( (scifi) => awesomeBooks1.push(scifi))
console.log(awesomeBooks1)
// [
//     'It',
//     'The Shining',
//     'i, Robot',
//     'Caves of Steel',
//     'The End of Eternity'
//   ]

// Usando o spread operator
const awesomeBooks2 = [horrorBooks, scifiBooks];
console.log(awesomeBooks2)
// [
//     [ 'It', 'The Shining' ],
//     [ 'i, Robot', 'Caves of Steel', 'The End of Eternity' ]
//   ]

const awesomeBooks3 = [...horrorBooks, ...scifiBooks];
console.log(awesomeBooks3)
// [
//     'It',
//     'The Shining',
//     'i, Robot',
//     'Caves of Steel',
//     'The End of Eternity'
//   ]


module.exports = {awesomeBooks}