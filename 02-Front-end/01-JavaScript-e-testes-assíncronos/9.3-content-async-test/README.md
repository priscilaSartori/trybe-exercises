# Boas vindas ao repositório de Testes Assíncronos

---

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

- Crie um fork desse projeto, para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

- Após fazer o fork, clone o repositório criado para o seu computador.

- Rode o comando `npm install`.

> 💡 Observe o que deve ser feito nas instruções para cada exercício.

</details>

<br />

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento</strong></summary><br />

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a `main`. Sinta-se à vontade!

**Atenção!**: Ao criar o PR,  você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Para isso, clique no _base repository_ como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora, basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

</details>

<br />

Nesse repositório você vai encontrar a estrutura necessária para acompanhar o dia sobre Testes Assíncronos.

A estrutura de pastas está organizada da seguinte forma:

`/mocks`: É aqui que se encontra a simulação da API, com comentários explicando como a função funciona. **Não se preocupe com isso agora**, você vai aprender a criar essas simulações no módulo de Front-end, quando estudar React Testing Library. O foco agora é entender como testar funções assíncronas, ok?

`/src/fetchCharacter.js`: Nesse arquivo se encontra a função responsável por fazer a requisição para a API, ela está comentada com o passo a passo. Aqui se encontram as opções de requisição com `async/await` e `.then()`, que está comentada. Você pode escolher a opção a qual se sinta mais confortável para utilizar, isso não irá interferir nos testes.

`/tests/fetchCharacter.test.js`: Esse é o único arquivo a ser alterado, a estrutura inicial já está feita. É aqui que você vai copiar e colar os códigos para acompanhar o conteúdo.

Caso aconteça algum imprevisto, você pode conferir os testes completos na branch `conteudo-completo`.

Bons estudos!
