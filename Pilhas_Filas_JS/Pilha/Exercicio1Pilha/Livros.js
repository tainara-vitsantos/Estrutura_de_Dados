class Livros {
    constructor() {
        this.pilha = [];
    }

    // Adicionar feitiço no topo
    adicionar(feitico) {
        this.pilha.push(feitico);
        console.log("Feitiço adicionado:", feitico);
    }

    // Remover feitiço do topo
    remover() {
        if (this.pilha.length === 0) {
            return "Não há feitiços na pilha.";
        }
        return this.pilha.pop();
    }

    // Ver feitiço do topo
    topo() {
        if (this.pilha.length === 0) {
            return "Nenhum feitiço disponível.";
        }
        return this.pilha[this.pilha.length - 1];
    }

    // Verificar se a pilha está vazia
    estaVazia() {
        return this.pilha.length === 0;
    }
}

module.exports = Livros;