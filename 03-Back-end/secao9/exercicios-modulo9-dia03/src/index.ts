// Exercício 5
// Agora no seu arquivo src/index.ts:
// instancie a classe Clube,
// instancie a classe QuadraFutebol,
// adicione a classe que você acabou de instanciar (classe QuadraFutebol), ao clube, com o método adicionarQuadra
// Com sua quadra adicionada ao clube, você já pode reservar essa quadra na data que você quiser. Chame o método reservar da classe QuadraFutebol, com a data que você quer jogar uma bolinha com as pessoas que você gosta.
// Imprima no console o resultado da reserva da quadra.
  import Clube from './Clube';
  import QuadraFutebol from './QuadraFutebol';
  
  const trybeClube = new Clube();
  const quadraFutebol = new QuadraFutebol();
  trybeClube.adicionarQuadra(quadraFutebol);
  
  // data que queremos reservar, aqui você pode colocar qualquer data obedecendo ano-mes-dia
  const dataReserva = new Date('2022-12-28');
  
  const reservarQuadraFutebol = trybeClube
    .buscarQuadra<QuadraFutebol>(0) // buscando a quadra de futebol a posição 0, já que ela foi a primeira a ser adicionada no array de quadras do clube
    .reservar(dataReserva); // o método reservar é da Classe QuadraFutebol, e passamos a data que queremos reservar
    console.log(reservarQuadraFutebol);
