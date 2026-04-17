class Fila {
    constructor() {
        this.fila = [];
    }

    // Entrar na fila (enqueue)
    entrar(crianca) {
        this.fila.push(crianca);
        console.log(`${crianca.nome} entrou na fila (${crianca.tempo}s)`);
    }

    // Atender (dequeue)
    atender() {
        if (this.estaVazia()) {
            console.log("Fila vazia.");
            return null;
        }
        return this.fila.shift();
    }

    // Ver próxima criança
    frente() {
        return this.fila[0];
    }

    // Verificar se está vazia
    estaVazia() {
        return this.fila.length === 0;
    }
}

module.exports = Fila;