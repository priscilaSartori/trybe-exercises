const fetchCoins = async () => {
    const url = `https://api.coincap.io/v2/assets`;

    const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => `Algo deu errado :( \n${error}`);

    return result;
};
fetchCoins()
