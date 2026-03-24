class Fila {
    constructor() {
      this.fila = [];
    }
  
    enqueue(item) {
      this.fila.push(item);
    }
  
    dequeue() {
      return this.fila.shift();
    }
  
    estaVazia() {
      return this.fila.length === 0;
    }
  }
  
  module.exports = Fila;