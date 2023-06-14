# 🚀Exercício 1
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
Resposta da análise de complexidade


# Exercício 2
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


# Exercício 3
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


# Exercício 4
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


# Exercício 5
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


# Exercício 6:
# Remover duplicatas de uma LinkedList, atividade extraída e adaptada do LeetCode. Nesta atividade será necessário implementar um algoritmo que receba uma LinkedList como argumento e retorne uma nova lista sem elementos duplicados. Esta função deve respeitar a complexidade O(n).

# input: 1 -> 1 -> 2
# saída: 1 -> 2

# input: 1 -> 1 -> 2 -> 3 -> 3
# saída: 1 -> 2 -> 3
# ⚠️ Faça a análise de complexidade da sua solução.
# Nota: são sim realizadas iterações (for 1 a N) 2x, sendo uma vez no index_of e uma vez no insert_last. Contudo, como visto na aula de complexidade de algoritmo, o resultado de 2 x N é O(n), pois a constante 2 é descartada.

def delete_duplicates(linked_list):
    list_with_unique_elements = LinkedList()

    while linked_list:
        current_node = linked_list.remove_first()
        if list_with_unique_elements.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements


# Exercício 7:
# Remover duplicatas de uma DoublyLinkedList, atividade extraída e adaptada do LeetCode. Nesta atividade será necessário implementar um algoritmo que receba uma DoublyLinkedList como argumento e retorne uma nova lista, sem elementos que possuem mais de uma ocorrência.
# input: 1 <-> 1 <-> 2
# saída: 2

# input: 1 <-> 1 <-> 2 <-> 3 <-> 3
# saída: 2

# input: 1 <-> 2 <-> 3 <-> 3
# saída: 1 <-> 2
# ⚠️ Faça a análise de complexidade da sua solução.
# O método index_of percorre a lista toda, e por isso sua Complexidade de tempo é O(n).
# O método delete_duplicates percorre a lista toda para localizar itens duplicados, e por isso sua Complexidade de tempo é O(n).

class DoublyLinkedList:
    # ...
    def index_of(self, value):
        position = 1
        current_value = self.head.next
        while current_value != self.tail:
            if current_value.value == value:
                return position
            current_value = current_value.next
            position += 1
        return -1


def delete_duplicates(linked_list):
    list_with_unique_elements = DoublyLinkedList()

    while linked_list:
        current_node = linked_list.remove_first()
        if linked_list.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements
