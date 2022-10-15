const url_api = `https://api.exchangerate.host/latest`;

const fetchCurrencies = async (moeda) => {
    try {
        const endpoint = `${url_api}?base=${moeda}`;
        const response = await fetch(endpoint);
        // console.log(response);
        const data = await response.json();
        // console.log(data.rates);
        return data.rates;
    } catch (error) {
        return error;
    }
}
// fetchCurrencies('brl')
//     .then(devolvido => console.log(devolvido));

if (typeof module !== 'undefined') {
    module.exports = fetchCurrencies;
  }