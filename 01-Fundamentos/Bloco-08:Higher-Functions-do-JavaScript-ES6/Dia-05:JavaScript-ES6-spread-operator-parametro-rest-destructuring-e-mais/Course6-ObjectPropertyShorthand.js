// Exemplo 1
const newUser = (id, name, email) => {
    return {
      id: id,
      name: name,
      email: email,
    };
  };
console.log(newUser(54, 'isabella', 'isabella@email.com')); 
// { id: 54, name: 'isabella', email: 'isabella@email.com' }

// Usando o feature property shorthand 
const newUser1 = (id, name, email) => {
    return {
      id,
      name,
      email,
    };
  };
  console.log(newUser1(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }


// Para Fixar - Altere a função getPosition utilizando a property shorthand.
const getPosition = (latitude, longitude) => ({
  latitude: latitude,
  longitude: longitude});

console.log(getPosition(-19.8157, -43.9542));

const getPosition1 = (latitude, longitude) => ({
    latitude,
    longitude
});
console.log(getPosition1(-19.8157, -43.9542));