class MinhaPilha{

    #items = [];   // Usamos uma lista para armazenar os elementos da pilha
    #tamanho = 0;  // Mantemos o controle do tamanho da pilha

    //Adiciona um elemento no topo da pilha
    adicionar(elemento){
        this.#items[this.#tamanho] = elemento; //Insere o elemento na posição atual do tamanho que é o 0.

        this.#tamanho++;  //Incrementa o tamanho
    }

    //Remove e retorna o elemento do topo da lista
    remover(){
        if(this.#tamanho === 0){
            return undefined;          //Se estiver a vazia retorna undefined
        }

        const ultimoItem = this.#items[this.#tamanho - 1]; //Pega o item no topo da lista
        delete this.#items[this.#tamanho - 1]; //Remove o item do topo
        this.#tamanho--; //Decremneta o tamnho da pilha
        return ultimoItem; //Retorna o item removido
    }

    //Retorna o elemento do topo da lista sem remove-lo
    topo (){
        if(this.#tamanho === 0){
            return undefined; //Se a pilha estiver a vazia retorna undefined
        }
        return this.#items[this.#tamanho - 1]; //Retorna o item do topo
    }

    //Limpa a pilha
    limpar(){
        this.#items = []; //Reseta os itens
        this.#tamanho = 0; //Reinicia o tamanho
    }

    //Verifica se a está vazia
    //VErifica se o tamanho da pilha é 0
    estaVazia = () => this.#tamanho === 0; //Retorna true ou false

    //Retorna o numero de elementos na pilha
    tamanhoPilha = () => this.#tamanho; //Retorna inteiros


}

module.exports = MinhaPilha;
