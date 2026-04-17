/* Um mágico embaralha 5 cartas com os valores A, B, C, D, E e as empilha.
 Peça aos alunos para simular o processo de colocar as cartas na pilha (push) e depois revelar
a ordem em que saem (pop), mostrando que o último a entrar é o primeiro a sair
(LIFO).

Desafio extra: inverter a ordem da pilha usando uma segunda pilha. */


class Cartas {

    constructor() {
        this.pilha = [];
    }
    //Adicionara cartas no topo
    adicionar(cartas) { 
        this.pilha.push(cartas);
        console.log("Adicionando a Carta:", cartas);
    }
    // Remover cartas do topo
    remover() {
        if (this.pilha.length === 0) {
            return "Não há cartas na pilha.";
        }
        return this.pilha.pop();
     }
     
    // Ver cartas do topo
    topo() { 
        if (this.pilha.length === 0) {
            return "Nenhuma carta disponível.";
        }
        return this.pilha[this.pilha.length - 1];
    }
    
    // Verificar se a pilha está vazia
    estaVazia() { 
        return this.pilha.length === 0;
    }
   



}

module.exports = Cartas;
