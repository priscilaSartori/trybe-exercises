# 🚀 Exercício 1: Implemente a classe com base no diagrama
# Implemente uma classe que contenha os seguintes atributos e métodos:

# Atributos:

# volume - será inicializado com um valor de 50 e só pode estar entre 0 e 99;
# canal - será inicializado com um valor de 1 e só pode estar entre 1 e 99;
# tamanho - será inicializado com o valor do parâmetro;
# ligada - será inicializado com o valor de False, pois está inicialmente desligado.
# Todos os atributos devem ser privados.

# Métodos:

# aumentar_volume - aumenta o volume de 1 em 1 até o máximo de 99;
# diminuir_volume - diminui o volume de 1 em 1 até o mínimo de 0;
# modificar_canal - altera o canal de acordo com o parâmetro recebido e deve lançar uma exceção (ValueError) caso o valor esteja fora dos limites;
# ligar_desligar - alterna o estado da TV entre ligado e desligado (True/False).

class TV:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if canal <= 1 or canal >= 99:
            raise ValueError('Canal indisponível')

        self.__canal = canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

# Exercício 2: Implemente uma classe Estatistica
# Implemente uma classe chamada Estatistica. Ela deve possuir um atributo numbers (uma lista de números) três métodos: um que calcula a média, um que calcula a mediana mediana e outro que calcula a moda de uma lista de números.

# 🐦 Dica: Você pode utilizar sorted para te auxiliar no método mediana. 🐦 Dica: Você pode utilizar collections.Counter para te auxiliar no método da moda.
from collections import Counter


class Estatistica:
    def __init__(self, numbers):
        self.numbers = numbers

    def media(self):
        return sum(self.numbers) / len(self.numbers)

    def mediana(self):
        numbers = sorted(self.numbers)
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[index - 1] + numbers[index]) / 2

        return numbers[index]

    def moda(self):
        number, _ = Counter(self.numbers).most_common()[0]
        return number

# Exercício 3: Implemente as classes das figuras geométricas
# Com base no diagrama abaixo, implemente as classes das figuras geométricas.

# Diagrama de classes das figuras geométricas
# Diagrama de classes das figuras geométricas
# Você deverá implementar as seguintes classes:

# FiguraGeometrica, uma classe abstrata com os seguintes métodos abstratos
# area
# perimetro
# Quadrado, que herda de FiguraGeometrica e adiciona o atributo lado
# Retangulo, que herda de FiguraGeometrica e adiciona os atributos base e altura
# Circulo, que herda de FiguraGeometrica e adiciona o atributo raio
from abc import ABC, abstractmethod
from math import pi as PI


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimetro(self):
        raise NotImplementedError


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado * self.lado

    def perimetro(self):
        return 4 * self.lado


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return 2 * (self.base + self.altura)


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return PI * self.raio * self.raio

    def perimetro(self):
        return 2 * PI * self.raio

# Exercícios - teste seu conhecimento
# Nesse exercício você implementará uma função em Python para resolver um teste técnico similar ao que já foi aplicado pelo Facebook e outras big techs! Tente desenvolver uma solução otimizada e escolha bem qual estrutura de dados será utilizada em termos de complexidade de tempo e espaço! Essa escolha tende a ser um diferencial em um processo seletivo desse tipo.

# Exercício
# Implemente um sistemas de logs por nível de severidade, seguindo o diagrama abaixo

# Diagrama de classes do sistema de logs
# Diagrama de classes do sistema de logs
# Classe Log

# Atributos:
# manipuladores - Será inicializado com um conjunto de subclasses de ManipuladorDeLog;

# Métodos:
# adicionar_manipulador - adiciona um manipulador ao conjunto de manipuladores do gerenciamento de logs (Log);
# info - dispara logs com nível de severidade "INFO";
# alerta - dispara logs com nível de severidade "ALERTA";
# erro - dispara logs com nível de severidade "ERRO";
# debug - dispara logs com nível de severidade "DEBUG";
# __log - dispara os logs formatados para todos os manipuladores (invocado para cada nível de severidade, para evitar duplicação de código);
# __formatar - formata os logs de acordo com o padrão “[ERRO - 01/01/2020 13:00:00]: ZeroDivisionError: division by zero”;

# Classe ManipuladorDeLog:
# A classe ManipuladorDeLog é uma interface (e, por consequência, uma classe abstrata) e deve declarar um método de classe (classmethod) e abstrato (abstractmethod) log que recebe um parâmetro mensagem ou msg.
# Classes LogEmArquivo e LogEmTela:
# As classes LogEmArquivo e LogEmTela devem herdar de ManipuladorDeLog e sobrescrever o método de classe log, salvando a mensagem em um arquivo ou a exibindo na tela, respectivamente.
# 🐦 Dica: Você pode utilizar a função print em tela ou em arquivo (que pode ter um nome padrão).
from abc import ABC, abstractmethod
from datetime import datetime


class ManipuladorDeLog(ABC):
    @classmethod
    @abstractmethod
    def log(cls, msg):
        raise NotImplementedError


class LogEmArquivo(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        with open('log.txt', 'a') as arquivo:
            print(msg, file=arquivo)


class LogEmTela(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        print(msg)


class Log:
    def __init__(self, manipuladores):
        self.__manipuladores = set(manipuladores)

    def adicionar_manipulador(self, manipulador):
        self.__manipuladores.add(manipulador)

    def info(self, msg):
        self.__log('INFO', msg)

    def alerta(self, msg):
        self.__log('ALERTA', msg)

    def erro(self, msg):
        self.__log('ERRO', msg)

    def debug(self, msg):
        self.__log('DEBUG', msg)

    def __log(self, nivel, msg):
        for manipulador in self.__manipuladores:
            manipulador.log(self.__formatar(nivel, msg))

    def __formatar(self, nivel, msg):
        data = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
        return f"[{nivel} - {data}]: {msg}"
