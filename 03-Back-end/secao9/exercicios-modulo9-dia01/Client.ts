// Exercício 3
// Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. 
// Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que 
// represente um pedido e uma que represente um item do pedido.

// A pessoa cliente deverá conter o nome;
// O item do pedido deve conter o nome do pedido (ex. “Batatas fritas”; “Açaí”) e o preço;
// O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) 
// e o percentual em decimal de desconto para o pedido 
// (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.

export default class Client {
  private _name = String();

  constructor(name: string) {
    this.name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._name = value;
  }
}