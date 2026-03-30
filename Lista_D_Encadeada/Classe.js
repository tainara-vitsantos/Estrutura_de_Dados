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
