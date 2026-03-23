class Bau {
    constructor() {
        this.pilha = [];
    }

    // Guardar tesouro
    adicionar(tesouro) {
        this.pilha.push(tesouro);
        console.log("Tesouro guardado:", tesouro);
    }

    // Retirar último tesouro
    remover() {
        if (this.pilha.length === 0) {
            return "O baú está vazio!";
        }
        return this.pilha.pop();
    }

    // Ver último tesouro
    topo() {
        if (this.pilha.length === 0) {
            return "Não há tesouros no baú.";
        }
        return this.pilha[this.pilha.length - 1];
    }

    // Verificar se está vazio
    estaVazio() {
        return this.pilha.length === 0;
    }
}

module.exports = Bau;