//Encontre todas as cidades da região nordeste (NE)

const cities = [
    {state: 'AM', name: 'Manaus', region: 'N'},
    {state: 'PA', name: 'Belém', region: 'N'},
    {state: 'TO', name: 'Porto nacional', region: 'N'},
    {state: 'MG', name: 'Nepomuceno', region: 'SE'},
    {state: 'BA', name: 'Cachoeira', region: 'NE'},
    {state: 'PR', name: 'Curitiba', region: 'S'},
    {state: 'SP', name: 'Hortolândia', region: 'SE'},
    {state: 'RN', name: 'Touros', region: 'NE'},
    {state: 'CE', name: 'Jericoacoara', region: 'NE'},
    {state: 'TO', name: 'Três Pedras', region: 'N'},
    {state: 'MG', name: 'João Pinheiro', region: 'SE'},
];

const citiesNE = () => {
    return cities.filter( (city) => {
        return city.region === "NE";
    });
}
console.log(citiesNE());
// [
//     { state: 'BA', name: 'Cachoeira', region: 'NE' },
//     { state: 'RN', name: 'Touros', region: 'NE' },
//     { state: 'CE', name: 'Jericoacoara', region: 'NE' }
//   ]

//REFATORANDO
const citiesNE1 = () => cities.filter( (city) => city.region === "NE");
console.log(citiesNE1());
