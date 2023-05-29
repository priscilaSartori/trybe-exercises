# Exercício 1:
# Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertical. Exemplo:
# F
# U
# L
# A
# N
# O
NAME = input("Insira seu nome: ")
for letter in NAME:
    print(letter)

# Exercício 2:
# Escreva um programa que receba vários números naturais e calcule a soma desses valores. Caso algum valor da entrada seja inválido (por exemplo uma letra), uma mensagem deve ser exibida na saída de erros no seguinte formato: “Erro ao somar valores, {valor} é um valor inválido”. Ao final, você deve imprimir a soma dos valores válidos.
# 🦜 Receba os valores em um mesmo input, solicitando à pessoa usuária que separe-os com um espaço. Receba os valores no formato str e utilize o método split para pegar cada valor separado. O método isdigit, embutido no tipo str, pode ser utilizado para verificar se a string corresponde a um número natural.
nums = input("Insira valores aqui, separados por espaço: ")

nums_arr = nums.split(" ")

sum = 0
for num in nums_arr:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
        sum += int(num)

print(f"A soma dos valores válidos é: {sum}")


# Exercício 3:
# Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que:

# lê todas essas informações;
# aplique um filtro, mantendo somente as pessoas que estão reprovadas;
# escreva seus nomes em outro arquivo.
# Considere que a nota miníma para aprovação é 6.

# Arquivo:
# Marcos 10
# Felipe 4
# José 6
# Ana 10
# Maria 9
# Miguel 5

# Exemplo saída:
# Copiar
# Felipe
# Miguel

# A função split pode ser utilizada para dividir o nome em uma linha. Ex: line.split() -> ["Marcos", "10"].
recovery_students = []
with open("file.txt") as grades_file:
    for line in grades_file:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recu_students.append(student_grade[0] + "\n")


with open("recuStudents.txt", mode="w") as recu_students_file:
    print(recuStudents)
    recu_students_file.writelines(recuStudents)


# Exercício 4:
# Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo:

# Entrada:
# PEDRO


# Saída:
# PEDRO
# PEDR
# PED
# PE
# P
def vertical_inverted_ladder(word):
    for removed_letters in range(len(word)):
        for index in range(len(word) - removed_letters):
            print(word[index], end="")
        print()


if __name__ == "__main__":
    name = input("Digite um nome: ")
    vertical_inverted_ladder(name)


# Exercício 5:
# Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.
# 🦜 Para embaralhar uma palavra faça: scrambled_word = "".join(random.sample(word, len(word)))
# 🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: random.choice(["word1", "word2", "word3"]) -> "word2".
import random

WORDS = [
    "cat",
    "elephant",
    "dog",
    "monkey",
    "duck",
    "chameleon",
    "bear",
    "moose",
    "rooster",
]
MAX_ATTEMPTS = 3


def draw_secret_word(words):
    secret_word = random.choice(words)
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
    return secret_word, scrambled_word


def collect_guesses():
    guesses = []
    for attempt in range(MAX_ATTEMPTS):
        guess = input("Guess the word: ")
        guesses.append(guess)
    return guesses


def check_game_result(secret_word, guesses):
    if secret_word in guesses:
        print(f"You win: {secret_word}")
    else:
        print(f"You lose: {secret_word}")


if __name__ == "__main__":
    secret_word, scrambled_word = draw_secret_word(WORDS)
    print(f"Scrambled word is {scrambled_word}")
    guesses = collect_guesses()
    check_game_result(secret_word, guesses)


# Exercício 6:
# Modifique o exercício anterior para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada palavra em uma linha.
import random


MAX_ATTEMPTS = 3


def retrieve_words(file):
    return [word.strip() for word in file]


def draw_secret_word(words):
    secret_word = random.choice(words)
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
    return secret_word, scrambled_word


def collect_guesses():
    guesses = []
    for attempt in range(MAX_ATTEMPTS):
        guess = input("Guess the word: ")
        guesses.append(guess)
    return guesses


def check_game_result(secret_word, guesses):
    if secret_word in guesses:
        print(f"You win: the secret word is {secret_word}")
    else:
        print(f"You lose: the secret word is {secret_word}")


if __name__ == "__main__":
    with open("words.txt") as file:
        words = retrieve_words(file)
    secret_word, scrambled_word = draw_secret_word(words)
    print(f"Scrambled word is {scrambled_word}")
    guesses = collect_guesses()
    check_game_result(secret_word, guesses)


# 🚀 Exercício 7:
# Dado o seguinte arquivo no formato JSON, leia seu conteúdo e calcule a porcentagem de livros em cada categoria em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato CSV como o exemplo abaixo.

# Saída:
# categoria,porcentagem
# Python,0.23201856148491878
# Java,0.23201856148491878
# PHP,0.23201856148491878
import json
import csv


def retrieve_books(file):
    return json.load(file)


def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calculate_percentage_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]


def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    # retrieve books
    with open("books.json") as file:
        books = retrieve_books(file)

    # count by category
    book_count_by_category = count_books_by_categories(books)

    # calculate percentage
    number_of_books = len(books)
    books_percentage_rows = calculate_percentage_by_category(
        book_count_by_category, number_of_books
    )

    # write csv
    header = ["categoria", "percentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, header, books_percentage_rows)


# 🚀 Exercício 8:
# Realize esse exercício utilizando TDD: implemente os testes e depois a função 🧪
# Escreva um programa que retorne uma lista com os valores numéricos de 1 a N, mas com as seguintes exceções:
# Números divisíveis por 3 deve aparecer como “Fizz” ao invés do número;
# Números divisíveis por 5 devem aparecer como “Buzz” ao invés do número;
# Números divisíveis por 3 e 5 devem aparecer como “FizzBuzz” ao invés do número.
# Exemplo: 3 -> [1, 2, "Fizz"].


# Testes:
def test_fizzbuzz_should_return_list_of_numbers():
    assert fizzbuzz(2) == [1, 2]


def test_fizzbuzz_divisible_by_three_should_be_fizz():
    assert fizzbuzz(3)[-1] == "Fizz"


def test_fizzbuzz_divisible_by_five_should_be_buzz():
    assert fizzbuzz(5)[-1] == "Buzz"


def test_fizzbuzz_divisible_by_five_and_three_should_be_fizzbuzz():
    assert fizzbuzz(15)[-1] == "FizzBuzz"


# Código:
def fizzbuzz(n):
    numbers = []
    for number in range(1, n + 1):
        if number % 15 == 0:
            numbers.append("FizzBuzz")
        elif number % 3 == 0:
            numbers.append("Fizz")
        elif number % 5 == 0:
            numbers.append("Buzz")
        else:
            numbers.append(number)
    return numbers


# 🚀 Exercício 9:
# Realize esse exercício utilizando TDD: implemente os testes e depois a função 🧪
# Faça uma função que valide um e-mail, lançando uma exceção quando o valor for inválido. Endereços de e-mail válidos devem seguir as seguintes regras:
# Devem seguir o formato nomeusuario@nomewebsite.extensao;
# O nome de usuário deve conter somente letras, dígitos, traços e underscores (_);
# O nome de usuário deve iniciar com uma letra;
# O nome do website deve conter somente letras e dígitos;
# O tamanho máximo da extensão é de 3 caracteres.
# 🦜 As funções isalpha, isdigit e isnumeric podem ser utilizadas para verificar se uma letra ou palavra são compostas de somente caracteres ou dígitos. Exemplo: "1".isalpha() -> False , "a".isalpha() -> True, "123".isnumeric() -> True.
# Testes:
def test_username_can_only_contain_letters():
    assert validate_email("aaaa@nomewebsite.ext") is None


def test_username_can_contain_letters_and_digits():
    assert validate_email("a1993@nomewebsite.ext") is None


def test_username_can_contain_letters_digits_and_dashes():
    assert validate_email("aa-a@nomewebsite.ext") is None


def test_username_can_contain_letters_digits_dashes_and_underscores():
    assert validate_email("a_a1a-a@nomewebsite.ext") is None


def test_username_should_starts_with_letter():
    assert validate_email("a@nomewebsite.ext") is None


def test_username_when_doesnt_start_with_letter_raise_exception():
    with pytest.raises(ValueError):
        validate_email("1@nomewebsite.ext")


def test_username_is_invalid_raise_exception():
    with pytest.raises(ValueError):
        validate_email("a%a@nomewebsite.ext")


def test_website_contain_only_letters_and_digits():
    assert validate_email("abc@website123.com") is None


def test_website_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("abc@website!123.com")


def test_extension_should_contain_only_three_chars():
    assert validate_email("abc@website123.com") is None


def test_extension_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("abc@website123.pyth")


# Código:
def validate_email(email):
    index = 0
    if not email[index].isalpha():
        raise ValueError("Username should start with a letter")

    # validate username
    while email[index] != "@" and index < len(email):
        letter = email[index]
        if not letter.isalpha() and not letter.isdigit() and letter not in ("_", "-"):
            raise ValueError(
                "Username should contain only letters, " "digits, dashes or underscores"
            )
        index += 1
    index += 1  # @
    # validate website
    while email[index] != "." and index < len(email):
        letter = email[index]
        if not letter.isalpha() and not letter.isdigit():
            raise ValueError("Website should contain only letters, and digits")
        index += 1

    index += 1  # .
    # validate extension
    counter = 0
    while index < len(email):
        counter += 1
        index += 1
    if counter > 3:
        raise ValueError("Extension maximum length is 3")
    return None


# Exercício 10
# Utilizando o arquivo pokemons.json, vamos escrever um programa que sorteie um pokemon aleatoriamente. O programa deve perguntar à pessoa usuária “Quem é esse pokemon?” até que ela o acerte. A cada erro, apresente um número de letras do nome daquele pokemon igual ao número de erros.
# Exemplo: O pokemon sorteado pelo programa é butterfree; a pessoa usuária chuta charizard; o programa deve exibir b. Em seguida, a pessoa chuta blastoise; o programa deve exibir bu; e assim por diante até a pessoa acertar.
# 🦜 Você pode utilizar o método choice do modulo random para sortear aleatoriamente um pokemon. Ex: random.choice(pokemon) -> {"name": "Pikachu" }.
import json
import random


def shot(pokemon_name):
    wrong_shot = True
    num_of_shots = 0
    while wrong_shot:
        num_of_shots += 1
        shot = input("Quem é esse pokemon? ")
        if shot == pokemon_name:
            print("Você acertou! Parabéns!")
            break
        elif num_of_shots == len(pokemon_name):
            print("Você errou!")
            break
        else:
            print("Dica: ", end="")
            for i in range(0, num_of_shots):
                print(pokemon_name[i], end="")
            print("")


if __name__ == "__main__":
    with open("pokemons.json") as file:
        pokemons = json.load(file)["results"]
        pokemon = random.choice(pokemons)
        pokemon_name = pokemon["name"]

    shot(pokemon_name)
