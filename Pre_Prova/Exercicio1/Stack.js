/* Um mágico embaralha 5 cartas com os valores A, B, C, D, E e as empilha.
 Peça aos alunos para simular o processo de colocar as cartas na pilha (push) e depois revelar
a ordem em que saem (pop), mostrando que o último a entrar é o primeiro a sair
(LIFO).

Desafio extra: inverter a ordem da pilha usando uma segunda pilha. */

export default class Stack {
    constructor() {
        this.items = [];
    }

    // Empilhar
    push(elemento) {
        this.items.push(elemento);
    }

    // Desempilhar
    pop() {
        if (this.isEmpty()) {
            return "Pilha vazia";
        }
        return this.items.pop();
    }

    // Ver topo
    peek() {
        return this.items[this.items.length - 1];
    }

    // Verificar se está vazia
    isEmpty() {
        return this.items.length === 0;
    }

    // Tamanho
    size() {
        return this.items.length;
    }

    // Mostrar pilha
    print() {
        console.log(this.items);
    }
}

