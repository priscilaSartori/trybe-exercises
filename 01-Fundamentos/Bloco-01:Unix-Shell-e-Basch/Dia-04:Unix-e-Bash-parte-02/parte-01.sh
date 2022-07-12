# Exercício 1
Navegue até a pasta unix_tests;
cd unix_tests

# Exercício 2
Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha.
cat > skills2.txt
Internet
Unix
Bash

ctrl + d

# Exercício 3
Adicione mais 5 itens à sua lista de skills 
cat >> skills2.txt 
Git
HTML
CSS
JavaScript
React

ctrl + d

Imprima a lista ordenada no terminal. 🤓
sort < skills2.txt

# Exercício 4
Conte quantas linhas tem o arquivo skills2.txt.
wc -l skills2.txt 

# Exercício 5
Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética.
cat skills2.txt | sort | head -3 > top_skills.txt

# Exercício 6
Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.
cat > phrases2.txt
Veja sempre o lado bom das coisas
Seja a mulher da sua vida
Por onde for floresça            

# Exercício 7
Conte o número de linhas que contêm as letras br.
grep -ic br phrases2.txt

# Exercício 8
Conte o número de linhas que não contêm as letras br.
grep -ivc br phrases2.txt

# Exercício 9
Adicione dois nomes de países ao final do arquivo phrases2.txt.
cat >> phrases2.txt 
Brasil
Coréia do Sul

# Exercício 10
Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt
cat phrases2.txt countries.txt > bunch_of_things.txt

# Exercício 11
Ordene o arquivo bunch_of_things.txt.
sort -o bunch_of_things.txt 

