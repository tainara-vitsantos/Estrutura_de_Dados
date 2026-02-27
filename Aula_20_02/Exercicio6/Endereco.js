/* Crie uma classe Endereco em Endereco.js e uma classe Cliente
em Cliente.js que recebe um Endereco no construtor. No app.js,
monte um cliente com endereço e exiba os dados. */

class Endereco {
    constructor(rua, numero, cidade, estado) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
    }

    enderecoCompleto() {
        return `${this.rua}, ${this.numero} - ${this.cidade}/${this.estado}`;
    }
}

export default Endereco;