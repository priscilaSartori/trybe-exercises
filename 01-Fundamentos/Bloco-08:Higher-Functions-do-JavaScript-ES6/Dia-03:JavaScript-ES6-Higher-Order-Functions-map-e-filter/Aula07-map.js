// A partir do array de objetos cities, crie um array de objetos do seguinte formato:
// {
//     state: "Amazonas",
//     city: "manaus",
//     region: "Norte",
// }

const states = [
    {short: 'AM', name: 'Amazonas'},
    {short: 'PA', name: 'Pará'},
    {short: 'TO', name: 'Tocantins'},
    {short: 'MG', name: 'Minas Gerais'},
    {short: 'BA', name: 'Bahia'},
    {short: 'PR', name: 'Paraná'},
    {short: 'SP', name: 'São Paulo'},
    {short: 'RN', name: 'Rio grande do Norte'},
    {short: 'CE', name: 'Ceará'},
];

const regions = [
    {short: 'N', name: 'Norte'},
    {short: 'NE', name: 'Nordeste'},
    {short: 'CW', name: 'Centroeste'},
    {short: 'SE', name: 'Sudeste'},
    {short: 'S', name: 'Sul'},
];

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

const citiesName = () => {
    return cities.map( (city) => { // city possui { state: 'AM', name: 'Manaus', region: 'N' }, na 1ª iteração
        const findState = states.find( (state) => {
            return state.short === city.state; // state possui { short: 'AM', name: 'Amazonas' }, na 1ª iteração
        } );
        const findRegion = regions.find( (region) => {
            return region.short === city.region; // region possui { short: 'N', name: 'Norte' }, na 1ª iteração
        } );
        return {
            state: findState.name,
            city: city.name,
            region: findRegion.name,
        }
    })
};
console.log(citiesName());
// [
//     { state: 'Amazonas', city: 'Manaus', region: 'Norte' },
//     { state: 'Pará', city: 'Belém', region: 'Norte' },
//     { state: 'Tocantins', city: 'Porto nacional', region: 'Norte' },
//     { state: 'Minas Gerais', city: 'Lavras', region: 'Sudeste' },
//     { state: 'Bahia', city: 'Feira de Santana', region: 'Nordeste' },
//     { state: 'Paraná', city: 'Cascavel', region: 'Sul' },
//     {
//       state: 'São Paulo',
//       city: 'Presidente Prudente',
//       region: 'Sudeste'
//     },
//     { state: 'Rio grande do Norte', city: 'Touros', region: 'Nordeste' },
//     { state: 'Ceará', city: 'Jericoacoara', region: 'Nordeste' }
//   ]
  
// REFATORANDO
const citiesName1 = () => cities.map( (city) => { 
        const findState = states.find((state) => state.short === city.state);
        const findRegion = regions.find((region) => region.short === city.region);
        return {
            state: findState.name,
            city: city.name,
            region: findRegion.name,
        }
    })
console.log(citiesName1());