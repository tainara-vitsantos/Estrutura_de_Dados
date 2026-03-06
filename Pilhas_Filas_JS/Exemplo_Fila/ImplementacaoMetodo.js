class Fila {

    #items = []; // Usamos uma lista para armazenar os itens
    #inicio = 0; //Representa o índice do inicio da fila
    #fim = 0; //Representa o índice do fim da fila

    //Adiciona um elemento ao final da fila(enqueue)
    enqueue(elemento) {

        this.#items[this.#fim] = elemento; //Coloca o elemento no final da fila

        this.#fim++;  //Incrementa o índice do fim da fila
    }

    //Remove e retorna o primeiro elemento da fila(dequeue)
    dequeue() {
        if (this.estaVazia()) {
            return undefined;   //Se a fila estiver a vazia retorna undefined
        }

        const item = this.#items[this.#inicio]; //obtem o primeiro elemnto 
        delete this.#items[this.#inicio]; //Remove o item do inicio da fila
        this.#inicio++; //Move o indice do inicio para o proximo item

        //Quando o inicio e o fim estiverem alinhados, redifine a fila
        if (this.#inicio === this.#fim) {
            this.#inicio = 0;
            this.#fim = 0;
        }
        return item; //Retorna o item removido
    }

    //Retorna o primeiro elemento da fila sem remove-lo (peak)
    front() {
        if (this.estaVazia()) {
            return undefined;   //Se a fila estiver a vazia retorna undefined
        }
        return this.#items[this.#inicio]; //Retorna o primeiro elemento
    }

    //Limpa a fila
    limpar() {
        this.#items = {};
        this.#inicio = 0;
        this.#fim = 0;
    }

    //Verifica se a fila esta vazia 
    //Verifica se os índices estão iguais
    estaVazia = () => this.#fim === this.#inicio;

    //Retorna o tamnho da filha 
    //Calcula a diferença entre fim e inicio
    tamanho = () => this.#fim - this.#inicio;
    

}

module.exports = Fila;
