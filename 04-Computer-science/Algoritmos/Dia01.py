# Exercício 1: Qual é a Ordem de Complexidade (complexidade de tempo) do algoritmo abaixo? E a complexidade de espaço?
# def multiply_array(numbers):
#     result = 1
#     for number in numbers:
#         result *= number
#     return result

# Complexidade de Tempo: O(n)
# Complexidade de Espaço: O(1)


# Exercício 2: Meça o tempo de execução do algoritmo acima e, mudando o tamanho das entradas, veja como, se você aumenta a entrada em n vezes, o tempo de execução aumenta em n² vezes!
# def multiply_arrays(array1, array2):
#     result = []
#     number_of_iterations = 0
#     for number1 in array1:
#         print(f'Array 1: {number1}')
#         for number2 in array2:
#             print(f'Array 2: {number2}')
#             result.append(number1 * number2)
#             number_of_iterations += 1
#     print(f'{number_of_iterations} iterações!')
#     return result
# meu_array = [1,2,3,4,5]
# multiply_arrays(meu_array, meu_array)
# n = 1000 # onde n será o número total de elementos dentro do array
# meu_array = list(range(1, n))

# ou
# time python3 meu_programa.py


# Exercício 3: Faça um algoritmo qualquer com três loops aninhados um dentro do outro. Entenda como ele terá uma complexidade de O(n³)!
# def multiply_arrays(array1, array2, array3):
#     result = []
#     number_of_iterations = 0
#     for number1 in array1:
#         for number2 in array2:
#             for number3 in array3:
#                 result.append(number1 * number2 * number3)
#                 number_of_iterations += 1
#     print(f'{number_of_iterations} iterações!')
#     return result
# Usar arrays de tamanho 1000 aqui pode ser muito lento!
# meu_array = list(range(1, 100))
# multiply_arrays(meu_array, meu_array, meu_array)


# Exercício 4: Imagine que você recebe dois arrays de tamanho igual, array1 e array2. Para cada elemento do array1, realize uma busca binária no array2. Mostre que a ordem de complexidade do algoritmo resultante é O(n * log n), ou O(n log n).
def do_something(array1, array2):
    for number in array1: # O (n)
        binary_search(array2, number) # O (log n)


# Exercício 1
# Dado um array de números de tamanho n, escreva um algoritmo que retorna true se há no array um número duplicado e false caso contrário. Analise a solução abaixo e diga qual é a ordem de complexidade desse algoritmo para o melhor caso, pior caso e caso médio.
""" O algoritmo ordena o array independente de qualquer coisa, então o seu pior caso, melhor caso e caso médio são, no mínimo, complexidade do algoritmo de ordenação do Python. Vendo a documentação, vemos que tal algoritmo é O(n log n). Dado que, depois de ordenar, no pior caso passamos pelo array inteiro uma vez só, isso seria O(n). Assim sendo, a complexidade é O(n*log(n) + n) o que, simplificando, fica O(n log n)"""
def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number'
    for number in numbers:
        if(previous_number == number): return True
        previous_number = number

    return False


# 🚀 Exercício 2
# Utilize o módulo random da linguagem Python para gerar um array com 100 números. Cada um deve ser a média de n números gerados aleatoriamente. Qual é a ordem de complexidade de tempo e de espaço deste programa?
""" Mesmo que, para o exemplo dado, o valor de `n` seja muito menor que o valor da constante `100`, para valores de `n` grandes o valor da constante se torna desprezível. Esse problema, então, é `O(n)`. Pelo mesmo motivo, a complexidade de espaço é constante, ou seja, `O(1)`"""
import random
def random_averages(n):
    list_of_averages = []
    for _ in range(100):
        average = 0
        for _ in range(n):
            average += random.randrange(1, n)
        average = average/n
        list_of_averages.append(average)
    return list_of_averages


# Exercício 3
# Dado um array de doces candies e um valor inteiro extra_candies, onde o candies[i] representa o número de doces que a enésima criança possui. Para cada criança, verifique se há uma maneira de distribuir doces extras entre as crianças de forma que ela possa ter o maior número de doces entre elas. Observe que várias crianças podem ter o maior número de doces. Analise o código abaixo para o melhor, pior caso e caso médio. Faça a análise de complexidade de espaço também.
"""Para os três casos, utilizando a função `max()` do Python, a complexidade será O(n). A lista abaixo da função `max()` também é executada em O(n). Ou seja, O(n) + O(n) = O(n). A complexidade de espaço também é O(n), pois quanto mais crianças temos, maior vai ser o tamanho da lista gerada. Faça a analise de complexidade de espaço também."""
def kids_with_candies(candies, extra_candies):
    # parece que a solução percorre o array somente uma vez,
    # porém isto é feito duas vezes, uma no `max` e outra para
    # preencher a resposta
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]
# saída: [True, True, True, False, True]
print(kids_with_candies([2, 3, 5, 1, 3], 3))


# 1 - Suponha que se está escrevendo uma função chamada battleship para um jogo de batalha naval. Dado um array bidimensional com n linhas e m colunas, e um par de coordenadas x para linhas e y para colunas, o algoritmo verifica se há um navio na coordenada alvo
# entrada = [ 0 0 0 0 1
#             0 0 0 0 1
#             1 1 1 1 1
#             0 0 0 1 0 ]

# resultado para (0, 4) = True
# resultado para (0, 0) = False

""" Mesmo para um array bidimensional, o acesso a um elemento é O(1).
A complexidade de espaço também é O(1), pois não consideramos a entrada em seu cálculo."""

def battleship(grid, line, column):
    if(grid[line][column] == 1): return True

    return False