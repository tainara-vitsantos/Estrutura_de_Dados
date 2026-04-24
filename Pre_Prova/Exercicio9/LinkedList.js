
class LinkedList{
    constructor(){
        this.head = null;
        this.current = null; // Para navegação
    }
    
    insertAtEnd(value){
        const newNode = { value, next: null };
        if(!this.head){
            this.head = newNode;
            this.current = this.head; // Inicia navegação
            return;
        }
        let temp = this.head;
        while(temp.next){
            temp = temp.next;
        }
        temp.next = newNode;
    }

    removeByValue(value){
        if(!this.head) return;
        if(this.head.value === value){
            this.head = this.head.next;
            return;
        }
        let temp = this.head;
        while(temp.next && temp.next.value !== value){
            temp = temp.next;
        }
        if(temp.next){
            temp.next = temp.next.next;
        }
    }

    find(value){
        let temp = this.head;
        while(temp){
            if(temp.value === value) return temp;
            temp = temp.next;
        }
        return null;
    }

    printList(){
        let temp = this.head;
        while(temp){
            console.log(temp.value);
            temp = temp.next;
        }
    }

    playCurrent(){
        if(this.current){
            console.log("Tocando: " + this.current.value);
        } else {
            console.log("Playlist vazia.");
        }
    }

    nextSong(){
        if(this.current && this.current.next){
            this.current = this.current.next;
            this.playCurrent();
        } else {
            console.log("Fim da playlist.");
        }
    }


}

module.exports = LinkedList;
