// Exercício 4
// Como você já criou a classe abstrata Quadra e a interface IFutebol, agora você deve criar a classe QuadraFutebol, essa classe deverá:
// ser criada no caminho src/QuadraFutebol.ts,
// extender a classe abstrata Quadra;
// implementar o método reservar, o tipo que esse método recebe deverá ser a interface IFutebol que você criou no exercício anterior.
// retornar o método de reservar com a seguinte resposta:

import normas from './normas/normasDeUso';
import { IAgenda } from './interfaces/IAgenda';
import Quadra from './Quadra';
import { IFutebol } from './interfaces/IFutebol';

class QuadraFutebol extends Quadra {
  // busca os dados da quadra referenciada
  public futebolData: IFutebol = normas.futebol;
  public reservar<IFutebol>(horaReserva: Date): IAgenda<IFutebol> {
    // gerando protocolo de agendamento
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      data: horaReserva,
      regras: this.futebolData as unknown as IFutebol,
    };
  }
}

export default QuadraFutebol; 
