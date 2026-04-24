class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
    

    class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;

    }

    append(data){
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    traverseReverse(){
        let current = this.tail;
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }

    find(data){
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current.data;
            }
            current = current.next;
        }
        return null;
    }

    

}

module.exports = DoubleLinkedList;