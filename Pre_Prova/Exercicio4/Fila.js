


// Classe Fila
class Fila {
  constructor() {
    this.itens = [];
  }

  // Adiciona um elemento ao final da fila
  enqueue(elemento) {
    this.itens.push(elemento);
  }

// Remove e retorna o primeiro elemento da fila
  dequeue() {
    if (this.isEmpty()) {
      return "Fila vazia";
    }
    return this.itens.shift();
  }

// Retorna o primeiro elemento da fila sem removê-lo
  isEmpty() {
    return this.itens.length === 0;
  }
}

module.exports = Fila;