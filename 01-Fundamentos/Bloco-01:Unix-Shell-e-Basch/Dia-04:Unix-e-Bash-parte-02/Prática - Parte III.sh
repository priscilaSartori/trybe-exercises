# Exercício 17
Liste todos os processos;
ps

# Exercício 18
Agora use o comando sleep 30 & ;
sleep 30 &

# Exercício 19
Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo);
kill % 47584

# Exercício 20
Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background;
sleep 30
ctrl + z
bg

# Exercício 21
Crie um processo em background que rode o comando sleep por 300 segundos.
sleep 300 &

# Exercício 22
Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente. Você deve criá-los em foreground (sem usar o &) e suspendê-los (apertando ctrl+z) após cada um começar a executar.
sleep 200
crtl + z
sleep 100
crtl +z

# Exercício 23
Verifique que apenas o processo sleep 300 está em execução com o comando jobs. 
jobs

Suspenda a execução desse processo.
fg %2
crtl + z

# Exercício 24
Retome a execução do processo sleep 100 em background com o comando bg.
bg %4

# Exercício 26
Termine a execução de todos os processos sleep (mate os processos).
kill %2 %3
