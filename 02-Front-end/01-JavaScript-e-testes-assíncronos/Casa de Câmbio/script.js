const btnPesquisar = document.getElementById('search-button');
const input = document.getElementById('currency-input');
const currenciesList = document.getElementById('currency-list');

const criarItemFavorito = (moeda, valor) => {
    const listaDeFavoritos = document.getElementById('favorite_currencies');
    const li = document.createElement('li');
    const div = document.createElement('div');
    div.append(moeda);
    li.appendChild(div);
    li.append(valor);
    listaDeFavoritos.appendChild(li);
}

const buscarItensNoLocalStorage = () => {
    const moedasFavoritas = localStorage.getItem('moedas');
    return moedasFavoritas;
}

const adicionarItemLocalStorage = () => {
    const listaDeFavoritos = document.getElementById('favorite_currencies');
    localStorage.setItem('moedas', listaDeFavoritos.innerHTML);
}

const criarList = ([moeda, valor]) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.id = moeda;
    span.className = 'material-symbols-outline heart';
    span.innerHTML = 'favorite';

    span.addEventListener('click', () => {
        criarItemFavorito([moeda, valor]);
        adicionarItemLocalStorage()
    })

    const div = document.createElement('div');
    div.append(moeda);
    div.appendChild(span);
    li.appendChild(div);
    li.append(valor);
    currenciesList.appendChild(li);
}

btnPesquisar.addEventListener('click', async () => {
    const inputCoin = input.value;
    // console.log(inputCoin)
    const base = document.getElementById('base');
    base.innerHTML = `Moeda Base: ${inputCoin || 'EUR'}`;

    const moedas = await fetchCurrencies(inputCoin);
    // console.log(moedas.rates)

    const array = Object.entries(moedas);
    currenciesList.innerHTML = array;
    // console.log(currenciesList)

    // ADICIONAR CADA UM DOS OBJETOS NA TELA
    array.forEach(criarList);
})

window.onload = () => {
    const moedasFavoritas = buscarItensNoLocalStorage();
    const listaDeFavoritos = document.getElementById('favorite_currencies');
    listaDeFavoritos.innerHTML = moedasFavoritas;
}