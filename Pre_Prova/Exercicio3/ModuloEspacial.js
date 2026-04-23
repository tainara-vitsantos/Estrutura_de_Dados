/* Módulos espaciais pousam um sobre o outro. O último a pousar é o primeiro a sair
da base. Simule essa sequência com uma pilha e peça para exibir a ordem de
retorno à nave. */

class ModuloEspacial {
    constructor() {
        this.itens = [];
    }

    push(elemento) {
        this.itens.push(elemento);
    }

    pop() {
        if (this.isEmpty()) {
            return "Base vazia";
        }
        return this.itens.pop();
    }

    isEmpty() {
        return this.itens.length === 0;
    }
}

module.exports = ModuloEspacial;



