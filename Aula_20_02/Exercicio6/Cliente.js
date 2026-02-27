class Cliente {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco; // recebe objeto Endereco
    }

    exibirDados() {
        console.log(`Cliente: ${this.nome}`);
        console.log(`Endereço: ${this.endereco.enderecoCompleto()}`);
    }
}

export default Cliente;