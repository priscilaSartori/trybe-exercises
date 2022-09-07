# DIA 1

O grande benefício das Higher Order Functions, também conhecidas como HOFs é a maior capacidade de reutilização de lógicas já implementadas, uma vez que permitem a criação de funções mais robustas. Isso gera economia de código e poupa o trabalho da pessoa desenvolvedora em reestruturar toda uma lógica novamente.

Os requisitos do exercício são:
- [ ] 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.
- [ ] 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
- [ ] 3 - Crie uma HOF que receberá três parâmetros:
- [ ] 3.1 - O primeiro será um array de respostas corretas (Gabarito);
- [ ] 3.2 - O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
- [ ] 3.3 - O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
- [ ] 3.4 - Uma resposta correta adiciona 1 ponto à pontuação final;
- [ ] 3.5 - A ausência de uma resposta não altera a pontuação (quando for "N.A");
- [ ] 3.6 - Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
