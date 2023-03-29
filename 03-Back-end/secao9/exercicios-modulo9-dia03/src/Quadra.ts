// Exercício 2
// Crie a classe Quadra em src/Quadra.ts, que não pode ser instanciada (classe abstrata). 
// Ela deve possuir um método abstrato reservar que recebe um parâmetro do tipo Date e que retorna um atributo do tipo IAgenda.
import { IAgenda } from './interfaces/IAgenda';

abstract class Quadra {
  protected abstract reservar<T>(horaReserva: Date): IAgenda<T>;
}

export default Quadra;