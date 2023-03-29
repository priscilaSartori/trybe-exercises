export default class Conta {
  private _saldo: number;

  constructor(saldo: number) {
    this._saldo = saldo;
  }

  // método get acessa informações mesmo privadas, deixando elas públicas
  // getSaldo() { //padrão
  //   return this._saldo;
  // }

  get saldo() { //quando chamar não precisa de abrir e fechar parenteses
    return this._saldo;
  }

  // set saldo(saldo:number) { // serve para atribuir
  //   this._saldo = saldo;
  // }

  public debito(valor:number) {
    if (this._saldo < valor) {
      throw new Error('Saldo insuficiente')
    }
    this._saldo -= valor;
  }
}
