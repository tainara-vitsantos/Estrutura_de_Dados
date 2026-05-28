class Node {
    constructor(value) {
        this.value = value;

        // Ponteiro para o próximo nó
        this.next = undefined;
    }
}

class LinkedList {
    constructor() {
        this.head = undefined;
    }

    insertAtBeginning(value) {
        const newNode = new Node(value);

        newNode.next = this.head;

        this.head = newNode;
    }

    insertAtEnd(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    removeByValue(value) {
        if (!this.head) {
            return;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;

        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    find(value) {
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return current;
            }

            current = current.next;
        }

        return null;
    }

    size() {
        let count = 0;
        let current = this.head;

        while (current) {
            count++;
            current = current.next;
        }

        return count;
    }

    isEmpty() {
        return this.head === undefined;
    }

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

module.exports = LinkedList;