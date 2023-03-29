// Crie uma classe chamada _Superclass_.
class Superclass {
  // A _Superclass_ deve possuir um atributo público _isSuper_.
  isSuper: boolean;

  constructor() {
    // _isSuper_ deve ser setado como `true` na inicialização.
    this.isSuper = true;
  }

  // A _Superclass_ deve possuir um método público chamado `sayHello`, que deve imprimir "Olá mundo!".
  public sayHello(): void {
    console.log('Olá mundo!');
  }
}

// Crie uma classe chamada _Subclass_ que herda da _Superclass_.
class Subclass extends Superclass { }

// Crie uma função `myFunc` fora do escopo da _Subclass_ que recebe um objeto da _Superclass_.
const myFunc = (object: Superclass) => {
  // Dentro dessa função, chame o método `sayHello` do objeto passado como parâmetro.
  object.sayHello();
};

// Crie um objeto da _Superclass_ e outro da _Subclass_.
const sup = new Superclass();
const sub = new Subclass();

// Chame a função `myFunc` 2 vezes, passando os objetos criados.
myFunc(sup);
myFunc(sub);