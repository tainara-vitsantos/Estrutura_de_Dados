
import ContaBancaria from "./ContaBancaria.js";


const conta = new ContaBancaria();

conta.depositar(500);
console.log("Saldo:", conta.verSaldo()); //500

conta.sacar(300);
console.log("Saldo após saque:", conta.verSaldo());

conta.sacar(2000); // teste de saldo insuficiente
console.log("Saldo final:", conta.verSaldo());