# Exercício 12
Navegue até a pasta unix_tests;
cd unix_tests

# Exercício 13
Rode o comando ls -l e veja quais as permissões dos arquivos;
ls -l

# Exercício 14
Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l;
    Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
chmod a+rw bunch_of_things.txt 

# Exercício 15
Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l;
    Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
chmod a-w bunch_of_things.txt 

# Exercício 16
Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt.
    Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
chmod a-w bunch_of_things.txt 
