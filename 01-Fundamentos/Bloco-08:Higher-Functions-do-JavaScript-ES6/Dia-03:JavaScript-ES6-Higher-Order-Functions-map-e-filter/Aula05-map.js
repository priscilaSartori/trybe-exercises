//A partir de array de objetos cities, crie um array de strings com o segunte formato:
// ${nomeDaCidade} - ${siglaDoEstado}
//'Manaus - AM'

const cities = [
    {state: 'AM', name: 'Manaus', region: 'N'},
    {state: 'PA', name: 'Belém', region: 'N'},
    {state: 'TO', name: 'Porto nacional', region: 'N'},
    {state: 'MG', name: 'Lavras', region: 'SE'},
    {state: 'BA', name: 'Feira de Santana', region: 'NE'},
    {state: 'PR', name: 'Cascavel', region: 'S'},
    {state: 'SP', name: 'Presidente Prudente', region: 'SE'},
    {state: 'RN', name: 'Touros', region: 'NE'},
    {state: 'CE', name: 'Jericoacoara', region: 'NE'},
];

const citiesAndStates = () => {
    return cities.map( (city) => {
        return `${city.name} - ${city.state}`
    })
}
console.log(citiesAndStates())
// [
//     'Manaus - AM',
//     'Belém - PA',
//     'Porto nacional - TO',
//     'Lavras - MG',
//     'Feira de Santana - BA',
//     'Cascavel - PR',
//     'Presidente Prudente - SP',
//     'Touros - RN',
//     'Jericoacoara - CE'
//   ]

const citiesAndStates1 = () => cities.map( (city) => `${city.name} - ${city.state}`);
console.log(citiesAndStates1());
// [
//     'Manaus - AM',
//     'Belém - PA',
//     'Porto nacional - TO',
//     'Lavras - MG',
//     'Feira de Santana - BA',
//     'Cascavel - PR',
//     'Presidente Prudente - SP',
//     'Touros - RN',
//     'Jericoacoara - CE'
//   ]