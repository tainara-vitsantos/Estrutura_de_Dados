// DoubleLinkedList.js

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoubleLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    // Inserir no início
    prepend(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
  
      this.size++;
    }
  
    // Inserir no final
    append(value) {
      const newNode = new Node(value);
  
      if (!this.tail) {
        this.head = this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.size++;
    }
  
    // Inserir em qualquer posição
    insertAt(value, index) {
      if (index < 0 || index > this.size) {
        console.log("Índice inválido");
        return;
      }
  
      if (index === 0) {
        this.prepend(value);
        return;
      }
  
      if (index === this.size) {
        this.append(value);
        return;
      }
  
      const newNode = new Node(value);
      let current = this.head;
  
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
  
      newNode.prev = current.prev;
      newNode.next = current;
  
      current.prev.next = newNode;
      current.prev = newNode;
  
      this.size++;
    }
  
    // Remover por posição
    removeAt(index) {
      if (index < 0 || index >= this.size) {
        console.log("Índice inválido");
        return;
      }
  
      let current = this.head;
  
      // início
      if (index === 0) {
        this.head = this.head.next;
  
        if (this.head) {
          this.head.prev = null;
        } else {
          this.tail = null;
        }
      }
      // fim
      else if (index === this.size - 1) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      // meio
      else {
        for (let i = 0; i < index; i++) {
          current = current.next;
        }
  
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
  
      this.size--;
    }
  
    // Mostrar lista
    traverse() {
      let current = this.head;
      let result = "";
  
      while (current) {
        result += current.value;
        current = current.next;
      }
  
      console.log(result);
    }
  
    // Mostrar reverso
    traverseReverse() {
      let current = this.tail;
      let result = "";
  
      while (current) {
        result += current.value;
        current = current.prev;
      }
  
      console.log(result);
    }
  }
  
  module.exports = DoubleLinkedList;