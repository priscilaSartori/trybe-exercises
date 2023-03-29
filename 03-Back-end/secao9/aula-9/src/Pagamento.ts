import Conta from './Conta';
import IPrestacao from './IPrestacao';

export default class Pagamento {
  private _conta: Conta;
  private _valor: number;
  private _vencimento: Date;
  private _descricao: string;
  private _multa: number;
  private _prestacoes: IPrestacao[];

  constructor(conta: Conta,
    valor: number, vencimento: Date,
    descricao: string) {
    this._conta = conta;
    this._valor = valor;
    this._vencimento = vencimento;
    this._descricao = descricao;
    this._multa = 0.2;
    this._prestacoes = [];
  }

  set valor(v: number) {
    this._valor = v;
  }

  get valor() {
    return this._valor;
  }

  set vencimento(v: Date) {
    this._vencimento = v;
  }

  get vencimento() {
    return this._vencimento;
  }

  set descricao(d: string) {
    this._descricao = d;
  }

  get descricao() {
    return this._descricao;
  }

  get conta(): Conta {
    return this._conta;
  }

  get multa() {
    return this._multa;
  }

  set prestacao(p: IPrestacao[]) {
    if (p.length > 10) {
      throw new Error('Parcelamento não pode ser mais do que 10');
    }
    this._prestacoes = p;
  }

  public pagar() {
    // // Clausula Guarda
    // if (!['boleto', 'cartao', 'pix'].includes(this.descricao)) {
    //   throw new Error('Forma de pagamento não aceita');
    // }

    if (this.descricao == 'boleto')
      return this.pagarBoleto();
    if (this.descricao == 'cartao')
      return this.pagarCartao();

    this.pagarPIX();
  }

  private pagarBoleto() {
    console.log('Pagando via Boleto');
    console.log('Saldo conta:', this.conta.saldo);
    console.log('Dados para pagamento boleto:');
    console.log('Descrição:', this.descricao);
    console.log('Vencimento:', this.vencimento);
    console.log('Multa:', this.multa);
    console.log('Processando pagamento ...');

    if (this.estaVencido()) {
      this.valor += (this.valor * this.multa);
    }

    this.conta.debito(this.valor);
    console.log('Saldo restante:', this.conta.saldo);
  }

  private pagarCartao() {
    console.log('Pagando via Cartão');
    console.log('Saldo conta:', this.conta.saldo);
    console.log('Descrição:', this.descricao);
    console.log('Valor:', this.valor);
    console.log('Processando pagamento ...');
    this.conta.debito(this.valor);
    console.log('Saldo restante:', this.conta.saldo);
  }

  private pagarPIX() {
    console.log('Pagando via PIX');
    console.log('Saldo conta:', this.conta.saldo);
    console.log('Descrição:', this.descricao);
    console.log('Valor:', this.valor);
    console.log('Processando pagamento ...');
    this.conta.debito(this.valor);
    console.log('Saldo restante:', this.conta.saldo);
  }

  private estaVencido() {
    return this._vencimento.getTime() < new Date().getTime();
  }
}