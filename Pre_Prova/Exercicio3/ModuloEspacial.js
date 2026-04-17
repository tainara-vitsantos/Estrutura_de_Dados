class ModuloEspacial {
    constructor() {
        this.pilha = [];
    }

    // Pousar módulo (push)
    pousar(modulo) {
        this.pilha.push(modulo);
        console.log("Módulo pousou:", modulo);
    }

    // Retornar módulo (pop)
    retornar() {
        if (this.pilha.length === 0) {
            console.log("Nenhum módulo na base.");
            return;
        }

        const modulo = this.pilha.pop();
        console.log("Módulo retornando:", modulo);
        return modulo;
    }

    //  Ver topo
    topo() {
        return this.pilha[this.pilha.length - 1];
    }

    // Verificar se está vazia
    estaVazia() {
        return this.pilha.length === 0;
    }
}

module.exports = ModuloEspacial;