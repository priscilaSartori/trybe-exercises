import Conta from './Conta';
import Pagamento from './Pagamento';

const contaCaio = new Conta(5000);
// contaCaio.saldo = 9000;   // set Saldo()
try {
  contaCaio.debito(9000)
} catch (err) {
  console.log(String(err))
}

const amanha = new Date();
amanha.setDate(amanha.getDate() + 1);

const pagamento = new Pagamento(contaCaio, 400, amanha, 'cartao');

pagamento.pagar();

// console.log(contaCaio.getSaldo()) // getSaldo()
console.log(contaCaio.saldo) // get saldo()

