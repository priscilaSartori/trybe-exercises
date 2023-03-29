import { ICar } from './interfaces';

export default class Car implements ICar {
  drive(): void {
    console.log('Drive a car');
  }

  fly(): void {
    throw new Error('I don\'t fly');
  }
}