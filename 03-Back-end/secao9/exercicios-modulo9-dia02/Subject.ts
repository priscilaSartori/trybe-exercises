// 🚀 Exercício 4: Crie uma classe cujos objetos representem uma disciplina lecionada na escola.
// `Class`: Subject
// `Attributes`:
//     - name: nome da disciplina
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome
// `Validations`:
//     - O nome tem que possuir no mínimo 3 caracteres

export default class Subject {
  constructor(private _name: string) {
    this.name = _name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  private validateName(value: string): void {
    if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }
}

// Para testar!
// import Subject from './Subject';

const math = new Subject('Matemática');
const story = new Subject('História');
const philosophy = new Subject('Filosofia');

console.log(math);
console.log(story);
console.log(philosophy);

// deve retornar erro
// const invalidSubjectName = new Subject('Po');
