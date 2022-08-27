// Faça uma função que receba um objeto representando um animal e retorne sua massa.

const lion = {
    name: 'Panthera leo',
    commonName: 'Lion',
    weightRange: {
      min: 186.55,
      max: 225,
      measurementUnit: 'kg'
    }
  };
  
  const blueWhale = {
    name: 'Balaenoptera musculus',
    commonName: 'Blue whale',
    weightRange: {
      min: 45,
      max: 173,
      measurementUnit: 't'
    }
  };
  
  const polarBear = {
    name: 'Ursus maritimus',
    commonName: 'Polar Bear',
    weightRange: {
      min: 350,
      max: 700
    }
  };
  
  const { name, commonName, weightRange } = lion;
  const { min, max, measurementUnit } = lion.weightRange;
  
  console.log(name); //Panthera leo
  console.log(commonName); // Lion
  console.log(weightRange); // { min: 186.55, max: 225, measurementUnit: 'kg' }
  console.log(min); // 186.55
  console.log(max); // 225
  console.log(measurementUnit); // kg
  
  const animalDescription = ({ name, commonName, weightRange }) => {
    const { min, max, measurementUnit = 'kg' } = weightRange;
  
    return `${commonName} (${name}) weighs around ${min}-${max} ${measurementUnit}`;
  }
  
  console.log(animalDescription(lion)); // 'Lion (Panthera leo) weighs around 186.55-225 kg'
  console.log(animalDescription(blueWhale)); // 'Blue whale (Balaenoptera musculus) weighs around 45-173 t'
  console.log(animalDescription(polarBear)); // 'Polar Bear (Ursus maritimus) weighs around 350-700 kg'
  
  module.exports = { animalDescription, lion, blueWhale, polarBear }
  
  