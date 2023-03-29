// Exercício 6
// Agora que você já sabe como uma nova quadra é criada no nosso clube, repita esse processo e crie uma quadra de tênis. Essa quadra deverá:
// ser criada no caminho src/QuadraTenis
// depois de ser criada, deverá ser instanciada e ser adicionada às quadras do nosso clube.
// dica: não se esqueça de cr../QuadraFutebolce antes de construir essa classe. Da mesma forma que foi feito na classe QuadraFutebol    

import normas from './normas/normasDeUso';
import { IAgenda } from './interfaces/IAgenda';
import Quadra from './Quadra';
import { ITenis } from './interfaces/ITenis';

class QuadraTenis extends Quadra {
  // busca os dados da quadra referenciada
  public tenisData: ITenis = normas.tenis;

  public reservar<ITenis>(horaReserva: Date): IAgenda<ITenis> {
    // gerando protocolo de agendamento
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      data: horaReserva,
      regras: this.tenisData as unknown as ITenis,
    };
  }
}

export default QuadraTenis;