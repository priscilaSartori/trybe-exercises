// Faça uma função que obtenha seis dados de data-hora (ano, mês, dia, hora, minuto, segundo) e retorne os dados de ano, mês e dia formatados.

// SEM REST
const formatDate = (year, month, day, hour, minute, second) => {
  return `${day}/${month}/${year}`
}
console.log(formatDate('1981', '7', '31', '22', '47', '12'));
// 31/7/1981


// COM SPREAD
const dateInfo = ['1981', '7', '31', '22', '47', '12'];
console.log(formatDate(...dateInfo));
// 31/7/1981

// COM REST
const formatDate1 = (year, month, day, ...rest) => {
  return `${day}/${month}/${year} - ${rest[0]}:${rest[1]}:${rest[2]}`
}
console.log(formatDate1(...dateInfo));
// 31/7/1981 - 22:47:12


// COM REST e JOIN
const formatDate2 = (year, month, day, ...rest) => {
  return `${day}/${month}/${year} - ${rest.join(':')}`
}
console.log(formatDate2(...dateInfo));
// 31/7/1981 - 22:47:12


// REFATORANDO
const formatDate3 = (year, month, day, ...rest) => `${day}/${month}/${year} - ${rest.join(':')}`;
console.log(formatDate3(...dateInfo));
// 31/7/1981 - 22:47:12


module.exports = { formatDate, dateInfo }