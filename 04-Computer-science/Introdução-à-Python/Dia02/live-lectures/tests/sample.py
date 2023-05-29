def my_sum(number1: int, number2: int) -> int:
    return number1 + number2


def test_sum_positive_numbers():
    assert my_sum(1, 3) == 4


def test_sum_negative_numbers():
    assert my_sum(-3, -4) == -7
