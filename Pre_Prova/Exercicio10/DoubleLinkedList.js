class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const newNode = { value, next: null, prev: null };
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    prepend(value){
        const newNode = { value, next: null, prev: null };
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    traverse(){
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }

    traverseReverse(){
        let current = this.tail;
        while(current){
            console.log(current.value);
            current = current.prev;
        }
    }
}

module.exports = DoubleLinkedList;
