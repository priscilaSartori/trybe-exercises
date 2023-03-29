// Exercício 1
// Vamos modelar algumas partes de um software de uma escola. 
// Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. 
// Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(enrollment: string, name: string) {
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrades = [];
    this._assignmentsGrades = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
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

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }

    this._examsGrades = value;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.',
      );
    }

    this._assignmentsGrades = value;
  }

// Exercício 2
// Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. 
// Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.

sumGrades(): number {
    return [...this.examsGrades, ...this.assignmentsGrades]
      .reduce((previousNote, note) => {
        const nextNote = note + previousNote;

        return nextNote;
      }, 0);
  }

  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this.examsGrades.length + this.assignmentsGrades.length;

    return Math.round(sumGrades / divider);
  }

}

// Para testar!

const personOne = new Student('202001011', 'Maria da Silva');

console.log(personOne);

const personTwo = new Student('202001012', 'João da Silva');

console.log(personTwo);

personOne.examsGrades = [25, 20, 23, 23];
personOne.assignmentsGrades = [45, 45];

console.log(personOne);
console.log('Soma de todas as notas: ', personOne.sumGrades());
console.log('Média de todas as notas: ', personOne.sumAverageGrade());
