# DIA 2

Em JavaScript, o tratamento de erros em um código é fundamental, pois ajuda a entender melhor o que está ocasionando tais erros. 

Os requisitos do exercício são:

## Parte 1 - 
- [ ] 1 - Crie erros personalizados.
- [ ] 1.1 - Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?
- [ ] 1.2 - Utilize o throw new Error e o bloco try/catch.
- [ ] 1.3 - Evite funções que tenham muitas responsabilidades distintas.
- [ ] 1.4 - Caso a pessoa usuária nao preencha nenhum input, ou preencha apenas um input, lance um erro.
- [ ] 1.5 - Caso os valores inseridos nos inputs pela pessoa usuária não sejam números, lance um erro. Para isso você pode utilizar a função isNan().
- [ ] 1.6 - Adicione o texto do erro no parágrafo com id result, para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!
- [ ] 1.7 - Utilize o finally para apagar os valores dos inputs ao final do bloco try/catch.
Dica: Cuidado ao utilizar o isNaN pois valores considerados falsy são transformados em 0, podendo assim gerar um falso positivo. E lembre-se que, no javascript para se separar a parte inteira da decimal de um número, você deve utilizar o . exemplo: 1.5, e não a , exemplo: 1,5.

## Parte 2 - 
- [ ] 1 - Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
- [ ] 2 - Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
- [ ] 2.1 - Modifique o nome da pessoa compradora.
- [ ] 2.2 - Modifique o valor total da compra para R$ 50,00.

## Parte 3 - 
- [ ] 1 - Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
- [ ] 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
- [ ] 3 - Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
- [ ] 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
- [ ] 5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons).
- [ ] 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
- [ ] 7 - Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto. 
- [ ] 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

## Parte 4 - 
- [ ] 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
- [ ] 2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

