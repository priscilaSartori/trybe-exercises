// Criar uma frase com as strings do array epic

const epic = ['a', 'long', 'time', 'ago','in a', 'galaxy', 'far far', 'away' ];
// Acc: Stars Wars epic phrase: ---> Curra
// Acc: Stars Wars epic phrase: a ---> Currlong
// Acc: Stars Wars epic phrase: a long ---> Currtime
// Acc: Stars Wars epic phrase: a long time ---> Currago
// Acc: Stars Wars epic phrase: a long time ago ---> Currin a
// Acc: Stars Wars epic phrase: a long time ago in a ---> Currgalaxy
// Acc: Stars Wars epic phrase: a long time ago in a galaxy ---> Currfar far
// Acc: Stars Wars epic phrase: a long time ago in a galaxy far far ---> Curraway
// Stars Wars epic phrase: a long time ago in a galaxy far far away
const epicPhrase = (array) => {
    return array.reduce( (acc, curr) => {
        console.log(`Acc: ${acc} ---> Curr${curr}`)
        return `${acc} ${curr}`
    },'Stars Wars epic phrase:');
}
console.log(epicPhrase(epic)); 
//Stars Wars epic phrase: a long time ago in a galaxy far far away

// USANDO UMA ESTRUTURA MAIS SIMPLES
console.log('Stars Wars epic phrase:',epic.join(' ')); 
//Stars Wars epic phrase: a long time ago in a galaxy far far away

// REFATORANDO
const epicPhrase1 = (array) => array
.reduce( (acc, curr) => `${acc} ${curr}`,'Stars Wars epic phrase:');
console.log(epicPhrase1(epic)); 
//Stars Wars epic phrase: a long time ago in a galaxy far far away
