/**
 * Desenvolva uma função que imprima uma mensagem de saudação
 */

const printGreeting = () => {
    const greeting = 'Oi sumido, tudo belê?';
    console.log(greeting);
}

printGreeting()

// para colocar um nome para substituir o 'sumido'.
const printGreeting1 = (name) => {
    const greeting = `Oi ${name}, tudo belê?`;
    console.log(greeting);
}

printGreeting1('Rods');

// Incrementar tipos de saudação:
const printGreeting2 = (name, type) => {
    let greeting;
    
    if (type === 'normal') {
        greeting = `Oi ${name}, tudo belê?`;
    } else if (type === 'formal') {
        greeting = `Oi ${name}, como vai vossa senhoria?`;
    } else if (type === '25b') {
        greeting = `Oi ${name}, bão demais?`;
    }
    console.log(greeting);
}
printGreeting2('Rods', 'normal');
printGreeting2('Rods', 'formal');
printGreeting2('Rods', '25b');


// // Refatorando
// 1 - Criando a saudação (template literals);
const greeting = (name) => `Oi ${name}, tudo belê?`
const formalGreeting = (name) => `Oi ${name}, como vai vossa senhoria?`
const greeting25b = (name) => `Oi ${name}, bão demais?`

// 2 - Escolhendo a saudação e Imprimindo a saudação
const printGreeting3 = (name, callbackGreeting) => {
const greeting = callbackGreeting(name);
console.log(greeting);
}
printGreeting3('Rods', greeting);
printGreeting3('Rods', formalGreeting);
printGreeting3('Rods', greeting25b);
 