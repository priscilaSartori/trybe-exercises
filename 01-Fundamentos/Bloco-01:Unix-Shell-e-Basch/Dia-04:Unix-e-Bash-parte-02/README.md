# DIA 4

O objetivo dos exercí­cios desse dia foi conhecer variáveis de ambiente e saber como usá-las no seu código, para ter flexibilidade e segurança no meu código. Também de conhecer sobre permissões para garantir que os arquivos manipulados na máquina (códigos, configurações, etc) não sejam alterados ou executados por pessoas indesejadas. 🔐

Os requisitos do exercí­cio são:

Parte I - Comandos de Input e Output

1 - Navegue até a pasta unix_tests;
2 - Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha.
3 - Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓
4 - Conte quantas linhas tem o arquivo skills2.txt.
5 - Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética.
6 - Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.
7 - Conte o número de linhas que contêm as letras br.
8 - Conte o número de linhas que não contêm as letras br.
9 - Adicione dois nomes de países ao final do arquivo phrases2.txt.
10 - Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt
11 - Ordene o arquivo bunch_of_things.txt.

Parte II - Permissões
12 - Navegue até a pasta unix_tests;
13 - Rode o comando ls -l e veja quais as permissões dos arquivos;
14 - Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l;
    Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
15 - Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l;
    Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
16 - Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt.
    Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

Parte III - Processos & Jobs
17 - Liste todos os processos;
18 - Agora use o comando sleep 30 & ;
19 - Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo);
20 - Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background;
21 - Crie um processo em background que rode o comando sleep por 300 segundos.
22 - Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.
23 - Você deve criá-los em foreground (sem usar o &) e suspendê-los (apertando ctrl+z) após cada um começar a executar.
24 - Verifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo.
25 - Você vai precisar trazer o processo para foreground (fg) e suspendê-lo (ctrl+z), ou enviar um sinal.
26 - Retome a execução do processo sleep 100 em background com o comando bg.
27 - Termine a execução de todos os processos sleep (mate os processos).