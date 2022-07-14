# Exercício 18
Na pasta unix_tests, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl: 
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

# Exercício 19
Mostre todo o conteúdo do arquivo countries.txt na tela.
cat countries.txt

# Exercício 20
Mostre o conteúdo de countries.txt, página por página, até encontrar a Zambia.
less countries.txt
/ <espaço>
q

# Exercício 21
Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.
less countries.txt
/Zambia
q

# Exercício 22
Busque por Brazil no countries.txt.
grep "Brazil" countries.txt || echo "Não encontrado"

# Exercício 23
Busque novamente por brazil, mas agora utilizando o lower case.
grep "brazil" countries.txt || echo "Não encontrado"

# Exercício 24
Crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha.
cat > phrases.txt
Faça hoje o que vai te dar ougulho amanhã.
As coisas não se tornam fáceis, você que se torna forte.
Muidar pode dar medo, mas é uma avewntura que pode te levar muito longe.
Não sabendo que era impossível, foi lá e fez.

# Exercício 25
Busque pelas frases que não contenham a palavra fox.
grep -iv fox phrases.txt

# Exercício 26
Conte o número de palavras do arquivo phrases.txt.
wc -w phrases.txt 

# Exercício 27
Conte o número de linhas do arquivo phrases.txt.
wc -l phrases.txt 

# Exercício 28
Crie os arquivos empty.tbt e empty.pdf.
touch empty.pdf empty.tbt

# Exercício 29
Liste todos os arquivos do diretório unix_tests.
ls -a

# Exercício 30
Liste todos os arquivos que terminem com txt.
ls *.txt

# Exercício 31
Liste todos os arquivos que terminem com tbt ou txt.
ls *.txt *.tbt

# Exercício 32
Acesse o manual do comando ls.
man ls
