// import FooCepAPI from './FooCepAPI';

// class CepService {
//   private readonly cepApi: FooCepAPI;

//   constructor() {
//     this.cepApi = new FooCepAPI();
//   }

//   addressByCep(cep: string, num: number) {
//     return this.cepApi.getAddressByCEP(cep, num);
//   }

//   cepByAddress(address: string, num: number) {
//     return this.cepApi.getCepByAddress(address, num);
//   }
// }

// export default CepService;

// Exercício 1
// Aplique a técnica de injeção de dependência para que a classe CepService diminua seu nível de acoplamento com a sua dependência atual.
// import FooCepAPI from './FooCepAPI';
import ICepAPI from './ICepAPI';

class CepService {
  private readonly cepApi: ICepAPI;

  constructor(cepApi: ICepAPI) {
    this.cepApi = cepApi;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;