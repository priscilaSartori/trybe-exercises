// Exercicio 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// - [ ] - Adição (a + b)
// - [ ] - Subtração (a - b)
// - [ ] - Multiplicação (a * b)
// - [ ] - Divisão (a / b)
// - [ ] - Módulo (a % b)
let a = 100;
let b = 10;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log (adicao);
console.log (subtracao);
console.log (multiplicacao);
console.log (divisao);
console.log (modulo);

//-- Exercicio 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. -->
let num1 = 30;
let num2 = 26
if (num1 > num2) {
    console.log (num1)
} else {
    console.log (num2)
}

//-- Exercicio  3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. -->
let x = 30;
let y = 68;
let z = 10;
if (x > y && x > z) {
    console.log (x)
} else if (y > z && y > x) {
    console.log (y)
} else {
    console.log (z)
};

//-- Exercicio 4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. -->
let number = -48;
if (number > 0) {
    console.log ("positive")
} else if (number < 0) {
    console.log ("negative")
} else {
    console.log ("zero")
}


//-- Exercicio 5 - 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 
// - [ ] - Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.-->
let angulo1 = -45;
let angulo2 = -90;
let angulo3 = 45;
let triangulo = angulo1 + angulo2 + angulo3;
if ( triangulo === 180) {
    console.log (true)
} else if (triangulo < 0) {
    console.log ("Erro: ângulo inválido")
} else {
    console.log (false)
}


//-- Exercicio 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. 
// - [ ] - Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// - [ ] - Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// - [ ] - Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// - [ ] - Exemplo: bishop (bispo) -> diagonals (diagonais)

// const xadrez = "cavalo";

// if (xadrez.toLowerCase === "peao") {
//     console.log (" Se move somente para frente, uma casa por vez")
// } else if (xadrez.toLowerCase === "torre") {
//     console.log ("Se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça")
// } else if (xadrez.toLowerCase === "cavalo") {
//     console.log ("Se move por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. Pode pular sobre outras peças.")
// } else if (xadrez.toLowerCase === "bispo") {
//     console.log ("Se move em uma linha reta diagonalmente no tabuleiro quantas casas quiser.")
// } else if (xadrez.toLowerCase === "rainha") {
//     console.log ("Se move por qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.")
// } else if (xadrez.toLowerCase === "rei") {
//     console.log ("Se move para qualquer casa adjacente")
// } else {
//     console.log ("Erro: peça inválido")
// }
let xadrez = "Cavalo";
switch (xadrez.toLowerCase()) {
    case "peao":
        console.log(" Se move somente para frente, uma casa por vez");
        break;
    case "torre":
        console.log("Se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça");
        break;
    case "cavalo":
        console.log("Se move por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. Pode pular sobre outras peças.");
        break;
    case "bispo":
        console.log("Se move em uma linha reta diagonalmente no tabuleiro quantas casas quiser.");
        break;
    case "rainha":
        console.log("Se move por qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.");
        break;
    case "rei":
        console.log("Se move para qualquer casa adjacente");
        break;
    default:
        console.log("Erro: peça inválido");
        break;
}


//-- Exercicio 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras: 
// - [ ] - Porcentagem >= 90 -> A
// - [ ] - Porcentagem >= 80 -> B
// - [ ] - Porcentagem >= 70 -> C
// - [ ] - Porcentagem >= 60 -> D
// - [ ] - Porcentagem >= 50 -> E
// - [ ] - Porcentagem < 50 -> F
// - [ ] - O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.-->
let porcentagemDeNota = 55;
if (porcentagemDeNota >= 90 && porcentagemDeNota <=100) {
    console.log ("A");
} else if (porcentagemDeNota >= 80 && porcentagemDeNota < 90) {
    console.log ("B");
} else if (porcentagemDeNota >= 70 && porcentagemDeNota < 80) {
    console.log ("C");
} else if (porcentagemDeNota >= 60 && porcentagemDeNota < 70) {
    console.log ("D");
} else if (porcentagemDeNota >= 50 && porcentagemDeNota < 60) {
    console.log ("E");
} else if (porcentagemDeNota < 50 && porcentagemDeNota >= 0) {
    console.log ("F");
} else {
    console.log ("Erro: Nota inválida")
}

//-- Exercicio 8 - 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false. 
// Bonus: use somente um if.
const num3 = 15;
const num4 = 23;
const num5 = 13;
let verdadeiro1 = num3 % 2 ===0;
let verdadeiro2 = num4 % 2 ===0;
let verdadeiro3 = num5 % 2 ===0;
if (verdadeiro1 || verdadeiro2 || verdadeiro3 == true) {
    console.log (true)
} else {
    console.log (false)
}


//-- Exercicio 9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
//Bonus: use somente um if.-->
const num6 = 51;
const num7 = 20;
const num8 = 16;
let isOdd = false;
if (num6 % 2 !== 0 || num7 % 2 !== 0 || num8 % 2 !== 0) {
    isOdd = true;
}
console.log (isOdd)


//-- Exercicio 10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos. 
// - [ ] - Atente que, sobre o custo do produto, incide um imposto de 20%.
// - [ ] - Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// - [ ] - O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
//     - [ ] - valorCustoTotal = valorCusto + impostoSobreOCusto
//     - [ ] - lucro = valorVenda - valorCustoTotal (lucro de um produto)-->
const custo = 50;
const venda = 120;
if (custo >= 0 && venda >=0) {
    const custoTotal = custo * 1.2;
    const lucro = (venda - custoTotal) *1000
    console.log (lucro);
} else {
    console.log ("Erro, o valore não pode ser negativo")
}



//-- Exercicio 11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido. 
// - [ ] - A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
//     - [ ] - INSS (Instituto Nacional do Seguro Social)
//         - [ ] - Salário bruto até R$ 1.556,94: alíquota de 8%
//         - [ ] - Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//         - [ ] - Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//         - [ ] - Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
//     - [ ] - IR (Imposto de Renda)
//         - [ ] - Até R$ 1.903,98: isento de imposto de renda
//         - [ ] - De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//         - [ ] - De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//         - [ ] - De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//         - [ ] - Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// - [ ] - Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// - [ ] - O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// - [ ] - Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
//     - [ ] - Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
//         - [ ] - R$ 2.670,00: salário com INSS já deduzido;
//         - [ ] - 7.5%: alíquota de imposto de renda;
//         - [ ] - R$ 142,80 parcela a se deduzir do imposto.
//     - [ ] - Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
//     - [ ] - O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
//     - [ ] - Resultado: R$ 2.612,55.-->
const salarioBruto = 10000.00;
let inss;
let impRenda;
if (salarioBruto <= 1556.94) {
    inss = salarioBruto - (salarioBruto * 0.8)
} else if (salarioBruto <= 2594.92 > 1556.95) {
    inss = (salarioBruto * 0.9)
 } else if (salarioBruto <= 5189.82 > 2594.92) {
    inss = salarioBruto - (salarioBruto * 0.11)
 } else {
    inss = salarioBruto - (salarioBruto - 570.88);
 }
 
 let salarioInss = salarioBruto - inss;

 if (salarioBruto <= 1903.98) {
    impRenda = 0;
 } else if (salarioBruto <= 2826.65 > 1903.99) {
    impRenda = ((salarioBruto * 0.75) + 142.80);
  } else if (salarioBruto <= 3751.05 > 2826.66) {
    impRenda = ((salarioBruto * 0.15) + 354.80);
  } else if (salarioBruto <= 4664.68 > 3751.06) {
    impRenda = ((salarioBruto * 0.225) + 636.13);
  } else {
    impRenda = ((salarioBruto * 0.275) + 869.36);
  };
  let salarioImpRenda = salarioBruto- impRenda;
console.log (salarioInss -impRenda)  
