//Encontre todas as cidades que comecem com a letra C

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

const citiesWithC = () => {
    return cities.filter( (city) => {
        return city.name[0] === "C";
    });
}
console.log(citiesWithC());
// [
//     { state: 'BA', name: 'Cachoeira', region: 'NE' },
//     { state: 'PR', name: 'Curitiba', region: 'S' }
//   ]

const citiesWithC1 = () => {
    return cities.filter( (city) => {
        return city.name.startsWith("C");
    });
}
console.log(citiesWithC1());
// [
//     { state: 'BA', name: 'Cachoeira', region: 'NE' },
//     { state: 'PR', name: 'Curitiba', region: 'S' }
//   ]
  
const citiesWithC2 = () => {
    return cities.filter( (city) => {
        return city.name.startsWith("Cach");
    });
}
console.log(citiesWithC2());
// [
//     { state: 'BA', name: 'Cachoeira', region: 'NE' },
//   ]

const citiesWithC3 = () => {
    return cities.filter( (city) => {
        return city.name.endsWith("a");
    });
}
console.log(citiesWithC3());
// [
//     { state: 'BA', name: 'Cachoeira', region: 'NE' },
//     { state: 'PR', name: 'Curitiba', region: 'S' },
//     { state: 'SP', name: 'Hortolândia', region: 'SE' },
//     { state: 'CE', name: 'Jericoacoara', region: 'NE' }
//   ]

//REFATORANDO
const citiesWithC4 = () => cities.filter( (city) => city.name[0] === "C");
console.log(citiesWithC4());
