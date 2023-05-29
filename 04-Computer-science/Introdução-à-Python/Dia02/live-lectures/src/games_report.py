import json


def load_games_from_json(file_path: str) -> list[dict]:
    try:
        with open(file_path, "r") as file:
            games = json.load(file)
            return games
    except FileNotFoundError:
        raise FileNotFoundError("Arquivo não encontrando!")
    except json.decoder.JSONDecodeError:
        print("Arquivo com formato inválido!")
    # finally:
    #     print("Metodo terminou")


def get_all_consoles(games: list[dict]) -> set[str]:
    all_consoles = set()
    for game in games:
        all_consoles.add(game["Release"]["Console"])
    return all_consoles


def get_sales_by_console(games_data: list[dict]) -> dict:
    result = {}

    for game in games_data:
        console = game["Release"]["Console"]
        sales = game["Metrics"]["Sales"]

        if console in result:
            result[console] += sales
        else:
            result[console] = sales

    return result


if __name__ == "__main__":
    video_games = load_games_from_json("data/video_games.json")
    consoles = get_all_consoles(video_games)
    print(f"Console:\n {consoles}")
    sales = get_sales_by_console(video_games)
    print("Vendas (U$k):")
    for console in sales:
        print(f"{console}: {round(sales[console],2)}")
