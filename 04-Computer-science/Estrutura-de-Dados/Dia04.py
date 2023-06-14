# Exercício 1:
# Filas: crie uma classe Queue, onde deve conter as operações: enqueue, dequeue, peek e is_empty.
# Para este desafio, é necessário efetuar o import das classes LinkedList e Node e utilizar seus métodos de acesso para simular uma fila, respeitando o padrão FIFO.
class Queue:

    def __init__(self):
        self.__data = LinkedList()

    def is_empty(self):
        return not len(self.__data)

    def enqueue(self, value):
        self.__data.insert_last(value)

    def dequeue(self):
        return self.__data.remove_first()

    def peek(self):
        return self.__data.get_element_at(0)


# Exercício 2:
# Pilhas: crie uma classe Stack, onde deve conter as operações: push, pop, peek e is_empty.
# Para este desafio, é necessário efetuar o import das classes LinkedList e Node e utilizar seus métodos de acesso para simular uma pilha, respeitando o padrão LIFO.
class Stack:

    def __init__(self):
        self.__data = LinkedList()

    def is_empty(self):
        return not len(self.__data)

    def push(self, value):
        self.__data.insert_last(value)

    def pop(self):
        return self.__data.remove_last()

    def peek(self):
        return self.__data.get_element_at(len(self.__data))


# Exercício 3:
# Estenda a classe Stack, que escrevemos durante as explicações do conteúdo, adicionando uma nova função chamada min_value() que irá retornar o menor valor inteiro presente na pilha. Por exemplo:
# stack.py

# content_stack.push(1)
# content_stack.push(-2)
# content_stack.push(3)
# print(content_stack.min_value()) # saída: -2
# Fonte: Min Stack

# Faça a análise de complexidade da sua solução.
# O método min_value realiza uma iteração com for, e por isso sua Complexidade de tempo é O(n).

import sys

class Stack():
    # ...

    # def peek(self):
    #     if self.is_empty():
    #         return None
    #     value = self._data[-1]
    #     return value

    def min_value(self):
        if self.is_empty():
            return None

        min_value = self._data[0]
        for elem in self._data:
            if elem < min_value:
                min_value = elem
        return min_value

    # def clear(self):
    #     self._data.clear()


if __name__ == "__main__":
    elements = [2, 1, 5, 4, 10, 6, 8, 22, 11, 10]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)

    # saída: 1
    print(content_stack.min_value())
    content_stack.push(-5)
    # saída: -5
    print(content_stack.min_value())


# Exercício 4:
# Estenda a classe Stack, que escrevemos durante as explicações do conteúdo, para que ela suporte um limite de itens dentro da pilha. Se definirmos que a pilha deve ter o tamanho dois, ela não poderá ter três itens. Por exemplo:

# content_stack = LimitStack(2)
# content_stack.push(1)
# content_stack.push(-2)

# try:
#     content_stack.push(3)
# except StackOverflow:
#     print("Não é possível adicionar outro item à pilha")

# Faça a análise de complexidade da sua solução.
# O método push realiza inserção de itens, que na Pilha possui Complexidade de tempo é O(1).

from stack import Stack


class StackOverflow(Exception):
    pass


class LimitStack(Stack):
    def __init__(self, limit):
        super().__init__()
        self.limit = limit

    def push(self, value):
        if self.size() + 1 > self.limit:
            raise StackOverflow()
        super().push(value)


stack = LimitStack(2)
stack.push(1)
stack.push(-2)
try:
    stack.push(5)
except StackOverflow:
    print('The Stack is full')


# Exercício 5:
# Um estacionamento comercial possui uma garagem em forma de linha, ou seja, somente é possível parar os carros enfileirados. Para auxiliar as pessoas que trabalham manobrando os veículos, iremos escrever um programa para que eles consigam adicionar novos veículos na garagem e retirar os veículos conforme a solicitação dos clientes. Escreva um programa que faça essas duas operações, inserção de veículos e a remoção do veículo desejado pela pessoa. Lembrando que os veículos que foram removidos para se chegar no veículo do cliente, ficam parados na rua e depois são adicionados na mesma ordem que estavam no estacionamento.
# Este algoritmo realiza inserções de itens, que na Pilha possui Complexidade de tempo é O(1), porém existem alguns whiles que percorrem listas, e por isso sua Complexidade de tempo é O(n).

from stack import Stack

garage = Stack()

option = 0

while option != 4:
    print('Operations: ')
    print('1. Add vehicle')
    print('2. Remove a vehicle')
    print('3. Parked vehicles')
    print('4. Close the program')
    option = int(input('Option: '))

    if option == 1:
        plate_number = input('plate number: ')
        garage.push(plate_number)
        print('Vehicle ' + plate_number + ' parked')
    elif option == 2:
        vehicle_plate = input('plate number: ')
        street = Stack()
        removed = False
        while not garage.is_empty():
            parked_plate = garage.pop()
            if parked_plate == vehicle_plate:
                print('Vehicle ' + vehicle_plate + ' removed')
                removed = True
            else:
                street.push(parked_plate)

        while not street.is_empty():
            street_vehicle = street.pop()
            garage.push(street_vehicle)

        if not removed:
            print('There is no vehicle parked with this plate')
    elif option == 3:
        print('Parked vehicles: ' + str(garage))
    else:
        print('Finishing The garage Plus 2000!')
        option = 4


# Exercício 6:
# Dada a função que faz a resolução de expressões pós fixas, adicione as operações de subtração e divisão. Considere os exemplos abaixo para testar a sua alteração na função.
# Nota: transforme as expressões em pós fixas e atribua valores. Caso seja necessário, faça o cast do valor para ponto flutuante.

# Lista Expressões
# Lista Expressões
# Faça a análise de complexidade da sua solução.
# O algoritmo realiza push e pop, que na Pilha possuem Complexidade de tempo é O(1).

from stack import Stack


def solve_expression(expr):
    stack = Stack()
    tokens_list = expr.split(' ')

    for token in tokens_list:
        if token == '+':
            # Sum operation
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == '*':
            # multiply operation
            result = stack.pop() * stack.pop()
            stack.push(result)
        elif token == '-':
            # Minus operation
            op2 = stack.pop()
            op1 = stack.pop()
            result = op1 - op2
            stack.push(result)
        elif token == '/':
            # Division operation
            op2 = stack.pop()
            op1 = stack.pop()
            result = op1 / op2
            stack.push(result)
        else:
            # add the number operation
            stack.push(int(token))

    return stack.pop()


# A = 5, B = 10, C = 30

# A + B - C / A -> 5 10 + 30 5 / -
print(solve_expression('5 10 + 30 5 / -')) # 9

# B + (A * C) / C * 2 -> 10 5 30 * 30 / 2 * +
print(solve_expression('10 5 30 * 30 / 2 * +')) # 20

# A * B - C + 4 * A - B -> 5 10 * 30 - 4 5 * 10 - +
print(solve_expression('5 10 * 30 - 4 5 * 10 - +')) # 30

# (A + C / B ) * (A + B) -> 30 10 / 5 + 5 10 + *
print(solve_expression('30 10 / 5 + 5 10 + *')) # 120

# 50 * B / 2 * 5 / A -> 50 10 * 2 / 5 * 5 /
print(solve_expression('50 10 * 2 / 5 * 5 /')) # 250


# Exercício 7:
# Dado uma string, contendo letras e parênteses. Crie uma função que irá reverter os caracteres de tal forma que somente os caracteres dentro dos parênteses sejam revertidos. A string final não deve conter os parênteses. Por exemplo:

# string = 'teste(lagel)'
# resultado = 'testelegal'
# Fonte: Reverse Substrings Between Each Pair of Parentheses

# Faça a análise de complexidade da sua solução.
# Este algoritmo realiza pop e push de itens, que na Pilha possuem Complexidade de tempo é O(1), porém existem alguns whiles e forsque percorrem listas, e por isso sua Complexidade de tempo é O(n).
from stack import Stack


def reverse_word(stack):
    char = ')'
    reversed_word = []
    while char != '(':
        char = stack.pop()
        if char != '(':
            reversed_word.append(char)

    for letter in reversed_word:
        stack.push(letter)


def reverse_letters(phrase):
    stack = Stack()
    for char in phrase:
        if char != ')':
            stack.push(char)
        else:
            reverse_word(stack)

    reversed_phrase = []
    while not stack.is_empty():
        reversed_phrase.append(stack.pop())

    return ''.join(reversed(reversed_phrase))


print(reverse_letters('teste(lagel)'))
print(reverse_letters('(abcd)'))
print(reverse_letters('(u(love)i)'))
print(reverse_letters('(ed(et(oc))el)'))
print(reverse_letters('a(bcdefghijkl(mno)p)q'))


# Exercício 8:
# Nesse exercício iremos implementar nossa própria fila! Tenha atenção ao enunciado e em caso de dúvidas procure o time de instrução via Slack ou mentoria! 😉
# Para este desafio, é necessário efetuar o import das classes LinkedList e Node e utilizar seus métodos de acesso para simular uma fila, respeitando o padrão FIFO.
class Queue:

    def __init__(self):
        self.__data = LinkedList()

    def is_empty(self):
        return not len(self.__data)

    def enqueue(self, value):
        self.__data.insert_last(value)

    def dequeue(self):
        return self.__data.remove_first()

    def peek(self):
        return self.__data.get_element_at(0)
