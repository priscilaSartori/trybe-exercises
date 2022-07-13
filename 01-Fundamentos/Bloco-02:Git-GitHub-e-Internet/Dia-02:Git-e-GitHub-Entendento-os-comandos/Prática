# Exercício 1
Utilizar o projeto com o texto no arquivo .txt, localizado dentro do diretório do dia anterior, crie uma cópia para usar no dia de hoje.
cp trybe-skills.txt /home/priscila/Documentos/trybe-exercises/01-Fundamentos/Bloco-02:Git-GitHub-e-Internet/Dia-02:Git-e-GitHub-Entendento-os-comandos

# Exercício 2
Navegue até a raiz do projeto com o arquivo .txt;
cd ..
cd Dia-02\:Git-e-GitHub-Entendento-os-comandos/

# Exercício 3
Verifique se não existe nada sem "commitar";
git status

# Exercício 4
Caso exista algo, verifique se é necessário e faça o commit, ou remova-o.
git add .
git commit -m "Adição do Bloco 2 / Dia 01"

# Exercício 5
Crie uma nova branch com o nome trybe-skills-changes e faça checkout nela;
git branch trybe-skills-changes
git checkout trybe-skills-changes 

# Exercício 6
No arquivo .txt, ao final da lista de habilidades , adicione mais duas habilidades que serão desenvolvidas na Trybe:
Exemplo:
O que eu vou aprender na Trybe:
- Unix
- Bash
- Git
- HTML
- CSS
cat >> trybe-skills.txt
- HTML
- CSS

# Exercício 7
Faça um git add nome-do-arquivo.extensao;
Você pode adicionar todos os arquivos que você modificou usando git add ., mas evite isso em commits com muitos arquivos para não adicionar nenhuma alteração por engano;
git add trybe-skills.txt

# Exercício 8
Agora um git commit -m "Mensagem que você gostaria";
Uma boa prática é sempre resumir o que o seu commit está alterando, por exemplo, git commit -m "Adiciona nova skill";
Evite juntar muitas modificações em um único commit. Assim, caso haja algum erro no código, ficará mais fácil visualizar em qual alteração ele surgiu;
git commit -m "Adição de habilidades"

# Exercício 9
Envie as alterações na nova branch trybe-skills-changes;
git push -u origin trybe-skills-changes

# Exercício 10
Abra um Pull Request com uma descrição detalhada:
Dê contexto para o que você está fazendo, passe links ou cite especificações que forem relevantes. Ex: "Trabalho feito para a semana 1 do curso de Software Developer da Trybe. Aqui, o desafio foi... E para resolver o problema fizemos... E o resultado foi...";

# Exercício 11
Retorne para a branch principal, main;
git checkout main

# Exercício 12
Verifique que você está na branch main;
git branch

# Exercício 13
Crie uma nova branch trybe-skills-updates a partir da master e faça checkout nela;
git checkout -b trybe-skills-updates

# Exercício 14
No mesmo arquivo .txt que você modificou no passo 4, também ao final da sua lista de habilidades, adicione mais um aprendizado que você terá nos próximos blocos:
Atenção! Aqui o arquivo não terá as alterações feitas anteriormente na outra branch 😉;
cat >> trybe-skills.txt 
- Banco de dados

# Exercício 15
Faça um git add nome-do-arquivo.extensao;
git add trybe-skills.txt 

# Exercício 16
Agora um git commit -m "Mensagem que você gostaria";
git commit -m "Nova habilidade que terei nos próximos blocos"

# Exercício 17
Envie as alterações na nova branch trybe-skills-updates;
Após o primeiro "push" da sua branch, você pode usar apenas o comando git push;
git push -u origin trybe-skills-updates;

# Exercício 18
Abra um Pull Request com uma descrição amigável:

# Exercício 19
Agora, faça o merge das branches trybe-skills-changes e trybe-skills-updates na branch master, através do Pull Request:

19.1 Primeiro, vá até a página do primeiro Pull Request (branch trybe-skills-changes) e faça o merge clicando no botão verde "Merge pull request";
19.2 Agora, vá até página do outro Pull Request (branch trybe-skills-updates) e tente fazer o merge clicando no mesmo botão. Reparou que ele está bloqueado? Isso acontece porque esse Pull Request está tentando alterar a mesma linha de código com um conteúdo diferente, e o Git não consegue determinar sozinho qual das duas linhas é a correta;
19.3 Você terá que resolver esse conflito antes de "mergear" o Pull Request. Clique no botão "Resolve conflicts", escolha uma das duas versões do texto (lembre-se de apagar as linhas com <<<<<<< e >>>>>>>, elas são criadas apenas para dar uma identificação mais visual ao problema) . Depois clique em "Mark as resolved" e, em seguida, em "Commit merge";
	
# Exercício 20
Agora você deve conseguir "mergear" seu Pull Request normalmente. 😎
