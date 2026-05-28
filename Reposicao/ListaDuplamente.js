class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Adiciona no final
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    // Adiciona no início
    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    // Remove o último
    removeLast() {
        if (!this.head) {
            return null;
        }

        let current = this.head;
        let previous = null;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        if (!previous) {
            this.head = null;
            this.tail = null;
        } else {
            previous.next = null;
            this.tail = previous;
        }

        this.length--;

        return current;
    }

    // Remove o primeiro
    removeFirst() {
        if (!this.head) {
            return null;
        }

        const removedNode = this.head;

        this.head = this.head.next;

        if (!this.head) {
            this.tail = null;
        }

        this.length--;

        return removedNode;
    }

    // Percorre a lista
    traverse() {
        let current = this.head;

        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    // Percorre ao contrário
    traverseReverse(node = this.head) {
        if (!node) {
            return;
        }

        this.traverseReverse(node.next);

        console.log(node.value);
    }

    // Insere em posição específica
    insertAt(value, index) {
        if (index < 0 || index > this.length) {
            return null;
        }

        if (index === 0) {
            this.prepend(value);
            return;
        }

        if (index === this.length) {
            this.append(value);
            return;
        }

        const newNode = new Node(value);

        let current = this.head;
        let previous = null;
        let currentIndex = 0;

        while (currentIndex < index) {
            previous = current;
            current = current.next;
            currentIndex++;
        }

        previous.next = newNode;
        newNode.next = current;

        this.length++;
    }

    // Retorna índice do valor
    indexOf(value) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === value) {
                return index;
            }

            current = current.next;
            index++;
        }

        return -1;
    }

    // Remove por índice
    removeAt(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        if (index === 0) {
            return this.removeFirst();
        }

        let current = this.head;
        let previous = null;
        let currentIndex = 0;

        while (currentIndex < index) {
            previous = current;
            current = current.next;
            currentIndex++;
        }

        previous.next = current.next;

        if (!current.next) {
            this.tail = previous;
        }

        this.length--;

        return current;
    }

    // Tamanho da lista
    size() {
        return this.length;
    }

    // Verifica se está vazia
    isEmpty() {
        return this.length === 0;
    }

    // Converte em string
    toString() {
        let current = this.head;
        let result = '';

        while (current) {
            result += `${current.value} -> `;
            current = current.next;
        }

        return result + 'null';
    }
}

module.exports = DoublyLinkedList;