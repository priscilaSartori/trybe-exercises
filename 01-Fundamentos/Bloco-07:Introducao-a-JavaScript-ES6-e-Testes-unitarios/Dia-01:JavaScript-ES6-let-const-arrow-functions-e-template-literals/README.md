# DIA 1

O let e o const vieram como solução para um antigo problema do JavaScript de falta de definição de escopo de variáveis. Sabe quando você declara uma variável dentro de um bloco e depois a utiliza fora dele? Isso é um vazamento de variável. Esse problema sempre trouxe grandes prejuízos, principalmente para aplicações maiores. Saber utilizar o let e o const de maneira consistente irá nos ajudar a ter um código mais confiável e previsível.
As arrow functions, além de deixar o código mais legível, quando bem utilizadas, ainda resolvem outro problema antigo do famigerado var that = this. Vamos ver esse problema com mais detalhes na sessão de conteúdos.
Os template literals são importantes pois irão nos ajudar a construir strings mais bem escritas e concisas, ajudando na prevenção de erros.
Por último, mas não menos importante, vem o operador ternário, ou ternary operator, que permite criar expressões condicionais com dois outputs possíveis em apenas uma linha.


Os requisitos do exercício são:

## Parte 1
- [ ] 1 -  Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.
	Modifique a estrutura da função para que ela seja uma arrow function;
	Modifique as variáveis para que respeitem o escopo onde estão declaradas;
	Modifique as concatenações para template literals.
- [ ] 2 -  Crie uma função que retorne um array em ordem crescente.
	Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
	Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
- [ ] 3 - Tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.


## Parte 2
- [ ] 1 -  Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
- [ ] 1.1 -  Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions (Lembre-se de armazenar a função utilizando o tipo de variável correta).
- [ ] 1.2 -  Dentro da função crie uma variável result.
- [ ] 1.3 -  Crie a lógica para retornar o fatorial de N!.
- [ ] 1.4 -  Imprima no terminal "Esse é o fatorial resultado da função" (Lembre-se de utilizar template literals nesse momento).
Dica: Armazene a chamada da função em uma varíavel para imprimir no terminal seu resultado.
- [ ] 1.5 -  Tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.
- [ ] 2 -  Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.
- [ ] 3 -  Crie uma página HTML que possua um contador de cliques.
- [ ] 3.1 -  Além da estrutura básica do HTML, sua página deve possuir:
- [ ] 3.1.1 -  Uma tag que receberá o valor atualizado da quantidade de clicks do botão.
- [ ] 3.1.2 -  Um botão com o texto click aqui!, que receberá um event listener do tipo click;
- [ ] 3.2 -  Na estrutura do script (dentro do HTML ou em um arquivo de JavaScript ):
- [ ] 3.2.1 -  Crie uma variável clickCount que irá acumular o número de clicks do botão;
- [ ] 3.2.2 -  Crie a lógica do evento, para que a cada click no botão seja adicionado o valor de 1. Exemplo: Caso não tenha sido realizado nenhum click, o valor renderizado será de 0. Caso o botão seja clicado 5 vezes o valor renderizado no HTML será de 5.
Dica: Nesse exercício utilize document. getElementById para retornar o elemento do DOM que deseja.
- [ ] 4 -  Crie duas funções JavaScript com as seguintes especificações:
- [ ] 4.1 -  Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
- [ ] 4.1.1 -  O nome da função deverá ser substituaX;
- [ ] 4.1.2 -  A função deverá receber um nome por parâmetro;
- [ ] 4.1.3 -  Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
- [ ] 4.1.4 -  A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
- [ ] 4.2 -  Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
- [ ] 4.2.1 -  O nome da função deverá ser minhasSkills;
- [ ] 4.2.2 -  A função deverá receber o retorno da Função 1 - substituaX por parâmetro;
- [ ] 4.2.3 -  Declare dentro da função uma variável com o nome skills, do tipo const;
- [ ] 4.2.4 -  A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
- [ ] 4.2.5 -  Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
