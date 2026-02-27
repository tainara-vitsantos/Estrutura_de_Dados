/* Crie uma classe ContaBancaria em ContaBancaria.js com atributo
privado saldo. Implemente os métodos depositar(valor),
sacar(valor) e verSaldo(). No app.js, simule depósitos e saques. */


// Classe Base
class ContaBancaria {
    #saldo = 0; //atributo privado

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Depósito de R$ ${valor} realizado com sucesso.`);
        } else {
            console.log("Valor inválido para depósito.");
        }
    }

    sacar(valor) {
        if (valor <= 0) {
            console.log("Valor inválido para saque.");
        } else if (valor > this.#saldo) {
            console.log("Saldo insuficiente para saque!");
        } else {
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado com sucesso.`);
        }
    }
    verSaldo() {
        return this.#saldo;
    }
}

export default ContaBancaria;