export interface ICar {
  drive(): void
}

export interface IAirPlane {
  fly(): void
}

export interface IFuturisticCar extends ICar, IAirPlane { }

export default class FuturisticCar implements IFuturisticCar {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}