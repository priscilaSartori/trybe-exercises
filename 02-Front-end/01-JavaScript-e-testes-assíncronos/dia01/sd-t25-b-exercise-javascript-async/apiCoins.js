const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';
    const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => `Algo deu errado :( \n${error}`);
    return result;
};

const fetchUsdCurrencies = async () => {
    const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest';
    const endpoint = '/currencies/usd.min.json';
    const url = baseUrl.concat(endpoint);
    const usdCurrencies = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.usd)
    .catch((error) => error.toString());
    return usdCurrencies;
};

const setCoins = async () => {
    const coins = await fetchCoins();
    const coinsList = document.getElementById('coins-list');
    const usdCurrencies = await fetchUsdCurrencies();
    coins
    .slice(0, 10)
    .forEach((coin) => {
      const newDiv = document.createElement('div');
      newDiv.className = 'div';
      coinsList.appendChild(newDiv);
      
      const newName = document.createElement('li');
      newName.innerText = `${coin.name}`;
      newName.className = 'name';
      newDiv.appendChild(newName);

      const newSymbol = document.createElement('li');
      newSymbol.innerText = `${coin.symbol}`;
      newSymbol.className = 'symbol';
      newDiv.appendChild(newSymbol);

      const newImg = document.createElement('img');
      newImg.src = `/img/${coin.symbol}.png`;
      newImg.className = 'img';
      newDiv.appendChild(newImg);

      const newUSD = document.createElement('li');
      const usdPrice = Number(coin.priceUsd);
      newUSD.innerText = `$ ${usdPrice.toFixed(2)}`;
      newUSD.className = 'usd';
      newDiv.appendChild(newUSD);

      const newBRL = document.createElement('li');
      const brlPrice = usdPrice * usdCurrencies.brl;
      newBRL.innerText = `R$  ${brlPrice.toFixed(2)}`;
      newBRL.className = 'brl';
      newDiv.appendChild(newBRL);
    });
};

  window.onload = () => {
   setCoins();
  };