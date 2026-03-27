
    class Fila {
    constructor(capacidade = 5) {
        this.fila = [];
        this.capacidade = capacidade;
    }

    enqueue(doc) {
        if (this.fila.length >= this.capacidade) {
            console.log("Fila cheia!");
            return;
        }
        this.fila.push(doc);
    }

    dequeue() {
        return this.fila.shift();
    }

    estaVazia() {
        return this.fila.length === 0;
    }
}
module.exports = Fila;