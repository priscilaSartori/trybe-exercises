# Estrutura de Dados: Array
# Exercício 1
# Tipos abstratos de dados possuem uma única implementação bem documentada?
# Não necessariamente. Um tipo abstrato de dados (TAD) é uma abstração matemática que descreve um conjunto de valores e operações sobre esses valores. Embora um TAD possa ser implementado de várias maneiras, é importante que sua interface seja bem definida e documentada, para que os usuários do TAD possam usá-lo de maneira consistente, independentemente da implementação subjacente. Uma implementação bem documentada é importante pois permite que outros desenvolvedores entendam como usar e interagir com o TAD sem precisar conhecer os detalhes de implementação. Além disso, uma documentação clara ajuda a garantir que o TAD seja implementado de maneira consistente e correta.

# Exercício 2
# Listas(list), dicionários(dict) e conjuntos(set), que já vêm no Python, são considerados tipos de dados? Caso negativo, justifique sua resposta.
# Sim, as listas list, dicionários dict e conjuntos set são considerados tipos de dados em Python. Na verdade, eles são considerados estruturas de dados, que são implementações de tipos abstratos de dados (TADs) em Python. Uma estrutura de dados é uma forma de organizar e armazenar dados em um programa de computador. As listas, dicionários e conjuntos são exemplos comuns de estruturas de dados em Python, que permitem armazenar e manipular dados de maneiras diferentes. Por exemplo, uma lista é uma estrutura de dados que permite armazenar uma sequência ordenada de valores, acessíveis por índices numéricos. Já um dicionário é uma estrutura de dados que permite armazenar pares chave-valor, onde cada valor é acessível por sua chave correspondente. E um conjunto é uma estrutura de dados que permite armazenar uma coleção de valores únicos, sem ordem específica.

# Exercício 3
# Que tal adicionarmos um método update que atualiza o valor a partir de um índice?
# 🐦 A assinatura deve ser def update(self, index, value):
# Para atualizar o valor de um elemento específico em uma instância de Exemplo, podemos chamar o método update passando o índice e o novo valor como argumentos. Por exemplo:

class Exemplo:
    def __init__(self, value):
        self.value = value

    def update(self, index, value):
        self.value[index] = value

exemplo = Exemplo([1, 2, 3, 4, 5])
exemplo.update(2, 10)
print(exemplo.value)  # [1, 2, 10, 4, 5]

# 🚀Exercício 4
# Em um software monitor, o qual verifica a resiliência de outro software, precisamos saber o tempo máximo que um software permaneceu sem instabilidades. Para isto, a cada hora é feito uma requisição ao sistema para verificamos se está tudo bem. Supondo um array que contenha os estados coletados por nosso software, calcule quanto tempo máximo que o servidor permaneceu sem instabilidades.
# 1 - OK
# 0 - Instabilidades

# valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

# valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4
# Faça a análise de complexidade da sua solução.
# O algoritmo realiza um for, portanto possui Complexidade de Tempo O(n).

def verify_max_time_ok(collected_values):
    max_time = 0
    current_time = 0
    for value in collected_values:
        if value == 1:
            current_time += 1
        else:
            current_time = 0
        if current_time >= max_time:
            max_time = current_time
    return max_time

# Exercício 5
# Em um jogo de baralho, as cartas estão representadas por um array numérico. Para iniciar o jogo, devemos embaralhar as cartas. Faremos isto dividindo uma porção de cartas em 2 e depois mesclando as duas porções. Por exemplo:
# Exemplo 1:
# cartas = [2, 6, 4, 5]
# cartas por parte = 2

# resultado = [2, 4, 6, 5]

# Exemplo 2:
# cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3

# resultado = [1, 7, 4, 6, 4, 6]
# Faça a análise de complexidade da sua solução.
# O algoritmo realiza um for, portanto possui Complexidade de Tempo O(n).

def shuffle(items):
    answer = []
    div_cards_by_two = len(items) // 2
    for offset in range(div_cards_by_two):
        answer.extend(items[offset::div_cards_by_two])
    return answer
# Ao usar lista[começo:fim:passo] nós temos “slices”, pedaços da lista que começam em começo (por padrão 0), terminam em fim (por padrão, até o fim da lista) e pula de passo em passo (por padrão, 1). ou seja, [11, 12, 21, 22, 31, 32][::2] resulta em [11, 21, 31].

# Exercício 6
# Imagine que você esteja trabalhando em um e-commerce, e foi lhe dado a demanda de analisar um array de números inteiros que representam os produtos dessa empresa. Verifique quantos produtos formam boas combinações, ou seja, quando um produto é igual ao outro e seu índice é maior que o anterior. Esta combinação pode ser utilizada para modificar os produtos de uma página. Por exemplo:
# Exemplo 1:
# produtos = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

# Exemplo 2:
# produtos = [1, 1, 2, 3]
# resultado = 1
# Os índices (0, 1) formam a única combinação.
# Faça a análise de complexidade da sua solução.
# O algoritmo realiza um for dentro de outro, portanto possui Complexidade de Tempo O(n²).

def good_pairs(numbers):
    answer = 0
    i = 0
    size = len(numbers)
    for i in range(size):
        for j in range(i + 1, size):
            if numbers[i] == numbers[j]:
                answer += 1
    return answer

# Exercício 7
# Você têm dois arrays de números inteiros que representam:
# I - instantes de entrada e saídas em uma biblioteca II - um número que represente um instante a ser buscado.
# Retorne quantas pessoas estudantes estão na biblioteca naquele instante. Considere que todo estudante entrou e saiu da biblioteca.
# entradas = [1, 2, 3]
# saidas = [3, 2, 7]
# instante_buscado = 4
# resultado: 1

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.
# Faça a análise de complexidade da sua solução.
# O algoritmo realiza um for, portanto possui Complexidade de Tempo O(n).

def students_in_instant(arrivals, departures, time_instant):
    answer = 0
    size = len(arrivals)
    for index in range(size):
        if arrivals[index] <= time_instant <= departures[index]:
            answer += 1
    return answer

# ou de uma maneira mais pythonica
def students_in_instant(arrivals, departures, time_instant):
    return sum(
        arrival <= time_instant <= departure
        for arrival, departure in zip(arrivals, departures)
    )

# Exercício 8
# Em um software gerenciador de servidores, precisamos verificar o número de servidores que se comunicam. Os servidores estão representados como um array bidimensional onde o valor 1 representa um computador e 0 a ausência do mesmo. Dois servidores se comunicam se eles estão na mesma linha ou mesma coluna.
# servidores =  [[1,0],[0,1]]
# resultado: 0
# Linhas e colunas são diferentes.

# servidores = [[1,0],[1,1]]
# resultado: 3
# Todos os servidores se comunicam com ao menos um outro servidor.

# servidores = [[1, 0, 0],
#               [1, 0, 0],
#               [0, 0, 1]]
# resultado: 2
# O servidor de índice (2, 2) não possui nenhum outro na mesma linha e coluna.
# Faça a análise de complexidade da sua solução.
# O algoritmo recebe um array de arrays com tamanho n, que podem ter quantidades diferentes de linhas e colunas. Portanto possui Complexidade de Tempo O(n.m).

def count_servers(grid):
    rows, columns = len(grid), len(grid[0])
    servers_in_rows = [0 for _ in range(rows)]
    servers_in_columns = [0 for _ in range(columns)]

    for i in range(rows):
        for j in range(columns):
            if grid[i][j] == 1:
                servers_in_rows[i] += 1
                servers_in_columns[j] += 1

    answer = 0
    for i in range(rows):
        for j in range(columns):
            if grid[i][j] == 1 and (
                servers_in_rows[i] > 1 or servers_in_columns[j] > 1
            ):
                answer += 1

    return answer
