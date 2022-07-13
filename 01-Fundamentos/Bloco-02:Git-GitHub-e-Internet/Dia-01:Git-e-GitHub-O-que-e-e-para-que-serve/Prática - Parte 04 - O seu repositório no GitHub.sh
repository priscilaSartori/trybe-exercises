# Exercício 1
Criar um arquivo .txt com o nome trybe-skills.txt e utilizar o conteúdo abaixo.
O que eu vou aprender na Trybe:
- Unix
- Bash
- Git
cat > trybe-skills.txt
O que eu vou aprender na Trybe:
- Unix
- Bash
- Git

# Exercício 2
Executar o comando ls -l na pasta de arquivos deste dia. Deverá receber um retorno parecido com:
ls -l
total 0
-rw-r--r--  1 tryber  staff  0 Jan 27 00:34 trybe-skills.txt
ls -l

# Exercício 3
Transformar essa pasta em um repositório Git:

3.1 - Retorne para a raiz da pasta de exercícios;
cd ..

3.2 - Inicialize o repositório com git init;
git init

3.3 - Crie um arquivo de README utilizando o comando touch README.md;
touch README.md

3.4 - Crie um commit inicial:
git add .
git commit -m "Initial commit"

3.5 - Vá até o seu GitHub e crie um repositório público, onde você irá guardar todos os exercícios que desenvolverá ao longo do curso;

3.6 - Dê ao repositório um nome descritivo, como por exemplo trybe-exercicios;

3.7 - Clique no botão SSH e então copie a URL do repositório;

3.8 - Execute o comando para adicionar a URL ao repositório local git remote add origin "URL_DO_REPOSITÓRIO";

3.9 - Verifique se tudo está certo com sua URL remota utilizando o comando git remote -v. Seu terminal deve conter algo similar a isso:
origin	git@github.com:john-snow/know-nothing.git (fetch)
origin	git@github.com:john-snow/know-nothing.git (push)

3.10 - Em que john-snow corresponde ao seu username e know-nothing ao nome que você deu ao seu repositório;

# Exercício 4
Envie as alterações para o reporitório remoto.
git push origin master

# Exercício 5
Vá até o seu GitHub e verifique as novas alterações.

# Exercício 6
Agora que tal adicionar uma descrição do que é seu repositório no README.md ? 💪🏼.

# Exercício 7
Fazer um commit quando terminar de alterar os arquivos;
git commit -m "Adição do README.md"

# Exercício 8
Depois do commit, faça sempre um push;
git push

# Exercício 9
Confira as alterações no GitHub.
