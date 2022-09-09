const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';

    const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => `Algo deu errado :( \n${error}`);

    return result;
};

const setCoins = async () => {
    const coins = await fetchCoins();
    const coinsList = document.getElementById('coins-list');
    coins
    .slice(0, 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');
      const usdPrice = Number(coin.priceUsd);
      newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;
      coinsList.appendChild(newLi);
    });
  };
  window.onload = () => setCoins();
