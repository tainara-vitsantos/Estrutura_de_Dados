class LinkedList {
    constructor() {
      this.count = 0;
      this.head = undefined;
    }
  
    // Adiciona no final (Ex: Exercícios 1, 2 e 3)
    insertAtEnd(element) {
      const node = new Node(element);
      let current;
      if (this.head == null) {
        this.head = node;
      } else {
        current = this.head;
        while (current.next != null) {
          current = current.next;
        }
        current.next = node;
      }
      this.count++;
    }
  
    // Adiciona no início (Ex: Exercícios 1, 2 e 3)
    insertAtBeginning(element) {
      const node = new Node(element);
      if (this.head != null) {
        node.next = this.head;
      }
      this.head = node;
      this.count++;
    }
  
    // Encontra um elemento (Ex: Exercício 4b)
    find(element) {
      let current = this.head;
      while (current != null) {
        if (current.element === element) {
          return current;
        }
        current = current.next;
      }
      return undefined;
    }
  
    // Remove por valor (Ex: Exercício 4a)
    removeByValue(element) {
      if (this.head == null) return undefined;
  
      if (this.head.element === element) {
        this.head = this.head.next;
        this.count--;
        return true;
      }
  
      let previous = this.head;
      let current = this.head.next;
  
      while (current != null) {
        if (current.element === element) {
          previous.next = current.next;
          this.count--;
          return true;
        }
        previous = current;
        current = current.next;
      }
      return false;
    }
  
    // Auxiliar para visualizar a lista no console
    toString() {
      if (this.head == null) return '';
      let objString = `${this.head.element}`;
      let current = this.head.next;
      while (current != null) {
        objString = `${objString} -> ${current.element}`;
        current = current.next;
      }
      return objString;
    }
  }

  module.exports = LinkedList;