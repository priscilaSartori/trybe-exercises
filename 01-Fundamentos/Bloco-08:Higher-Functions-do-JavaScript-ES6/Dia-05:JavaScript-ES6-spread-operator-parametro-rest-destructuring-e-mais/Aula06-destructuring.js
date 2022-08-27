// Extraia as informações de name e birthplace do objeto para montar uma frase!
// 'Scrooge McDuck from Glasgow, Scotland'

const richestDuckInTheWorld = {
    name: 'Scrooge McDuck',
    birthplace: 'Glasgow, Scotland',
    city: 'Duckburg',
    jobs: ['Shoe shiner', 'Sailor', 'Cowboy', 'Miner', 'Banker', 'Entrepreneur']
  };
  
  const name1 = richestDuckInTheWorld.name; 
  const birthplace1 = richestDuckInTheWorld.birthplace; 
  const city1 = richestDuckInTheWorld.city; 
  const jobs1 = richestDuckInTheWorld.jobs;
  
  console.log(name1); // Scrooge McDuck
  console.log(birthplace1); // Glasgow, Scotland
  console.log(city1); // Duckburg
  console.log(jobs1); 
    //   [
    //     'Shoe shiner',
    //     'Sailor',
    //     'Cowboy',
    //     'Miner',
    //     'Banker',
    //     'Entrepreneur'
    //   ]


//   COM DESTRUCTURING
  const { name, birthplace, city, jobs } = richestDuckInTheWorld; 
  const [ jobOne, jobTwo, jobThree, ...rest ] = jobs;
  
  console.log(name); // Scrooge McDuck
  console.log(birthplace); // Glasgow, Scotland
  console.log(city); // Duckburg
  console.log(jobs); // ['Shoe shiner','Sailor','Cowboy','Miner','Banker','Entrepreneur']
  console.log(jobOne); // Shoe shiner
  console.log(jobTwo); // Sailor
  console.log(jobThree); // Cowboy
  console.log(rest); // [ 'Miner', 'Banker', 'Entrepreneur' ]
  
  module.exports = { name, birthplace };