# Exercício: Faça um algoritmo recursivo de soma. Esse algoritmo deve receber um número de parâmetro e deve somar todos os números antecessores a ele.
# Número passado por parâmetro à função: 4
# Execução: 4 + 3 + 2 + 1
# Resultado: 10
def sum_recursive(n):
    if n == 0:
        return 0
    else:
        print(n)
        return n + sum_recursive(n - 1)
sum_recursive(4)


# 🚀 Exercício 1:
# Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n).
def conta_pares(n):
    numero_de_pares = 0
    for num in range(n+1):
        if num % 2 == 0 and num != 0:
            numero_de_pares += 1
    return numero_de_pares


# 🚀 Exercício 2:
# Transforme o algoritmo criado acima em recursivo.
def conta_pares(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + conta_pares(n-1)
    else:
        return conta_pares(n-1)


# 🚀 Exercício 3:
# Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.
def maiorinteiro_aux(lista, tamanho):
    if tamanho == 1:
        return lista[0]
    else:
        maior_do_resto_da_lista = maiorinteiro_aux(lista, tamanho-1)
        if maior_do_resto_da_lista > lista[tamanho-1]:
            return maior_do_resto_da_lista
        else:
            return lista[tamanho-1]


def maiorinteiro(lista):
    tamanho = len(lista)
    return maiorinteiro_aux(lista, tamanho)


print(maiorinteiro([1, 21, 300, 4, 57]))


# 🚀 Exercício 4:
# Escreva um algoritmo recursivo para encontrar o máximo divisor comum (mdc) de dois inteiros.
def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)
