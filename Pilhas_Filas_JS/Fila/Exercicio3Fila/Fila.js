class Fila {
    constructor() {
      this.fila = [];
    }
  
    // adicionar visitante
    enqueue(nome) {
      this.fila.push(nome);
      console.log(nome + " entrou na fila.");
    }
  
    // remover visitante
    dequeue() {
      if (this.estaVazia()) {
        console.log("Fila vazia!");
        return null;
      }
  
      return this.fila.shift();
    }
  
    // verificar se está vazia
    estaVazia() {
      return this.fila.length === 0;
    }
  }
  
  module.exports = Fila;