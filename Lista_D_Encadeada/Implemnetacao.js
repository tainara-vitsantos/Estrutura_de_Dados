//Listas encadeadas são compostas por nós (Node) que juntos formam uma sequência.

//Cada nó contém um elemento de dados e  uma referência -> ponteiro para o próximo nó na sequência.

         // node ou nó 
// Head -> value|next -> value|next -> value|next -> undefined





//Classe que será cada um dos nós da lista
//Nó possui duas partes

// Dados -> O valor que queremos armazenar.
//Referência -> Um ponteiro para o próximo nó da lista.

class Node {
    constructor (value){
        this.value = value;

        //Ponteiro para o próximo nó
        this.next = undefined;
    }
}





//Implemnetação do prótotipo da classe
class LinkedList{
    #head = undefined
    #length = 0;

    insertAtBeginning(value){}

    insertAtEnd(value){}

    removeByValue(value){}

    find(value){}

    size(){}

    isEmpty(){}

    toString(){}

}

module.exports = LinkedList;


// Inserir no inicio da lista
insertAtBeginning(value) {

    //Cria um novo nó
    let newNode = new Node(value);

    //O novo nó aponta para o antigo "head"
    newNode.next = this.#head;

    //Atualiza o "head" para o novo nó
    this.#head = newNode;

    //Incrementa o tamanho da lista
    this.#length++;

}