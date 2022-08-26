//A partir do array birds, crie outro array que contenha somente os nomes dos pássaros, porém com letras maiúsculas;

const birds = [
    {id: 'DV8', name: "Eurasin Collared-Dove", type: "Dove"},
    {id: 'HK12', name: "Bald Eagle", type: "Hawk"},
    {id: 'HK6', name: "Red-Tailed Hawk", type: "Hawk"},
    {id: 'SP11', name: "Old World Sparrow", type: "Sparrow"},
    {id: 'DV2', name: "Mourning Dove", type: "Dove"},
];

const nomesPassaros = () => {
    return birds.map ( (bird) => {
        return bird.name.toUpperCase();
    });
}
console.log(nomesPassaros())
// [
//     'EURASIN COLLARED-DOVE',
//     'BALD EAGLE',
//     'RED-TAILED HAWK',
//     'OLD WORLD SPARROW',
//     'MOURNING DOVE'
//   ]

//REFATORANDO
const nomesPassaros1 = () => birds.map ( (bird) => bird.name.toUpperCase());
console.log(nomesPassaros1())
[
    'EURASIN COLLARED-DOVE',
    'BALD EAGLE',
    'RED-TAILED HAWK',
    'OLD WORLD SPARROW',
    'MOURNING DOVE'
  ]
  