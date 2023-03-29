// Exercício 1
// Agora vamos criar uma interface IAgenda, que será usada para definir o padrão dos agendamentos das quadras. Para isso:
// Crie a interface IAgenda:
// deve ser criada no caminho src/interfaces/IAgenda.ts,
// IAgenda que deve receber um parâmetro genérico do tipo T,
// IAgenda deve possuir 3 atributos:
// protocolo do tipo string;
// data do tipo Date;
// regras do tipo T.
export interface IAgenda<T> {
  protocolo: string,
  regras: T,
  data: Date
}