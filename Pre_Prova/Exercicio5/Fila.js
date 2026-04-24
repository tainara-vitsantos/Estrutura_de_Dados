class Fila{
    constructor(){
        this.itens = [];
    }   
    enqueue(elemento){
        this.itens.push(elemento);
    }
    dequeue(){
        if(this.isEmpty()){
            return "Fila vazia";
        }   
        return this.itens.shift();
    }
    isEmpty(){
        return this.itens.length === 0;
    }  
}

module.exports = Fila;

