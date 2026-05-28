

class MeuArray {

  #items = [];  // Array interno para armazenar os elementos

  // controle do número de elementos
  #tamanho = 0; // Mantém o controle do número de elementos

  // Construtor
  constructor() { // Apenas para indicar que a classe foi instanciada
    console.log("MeuArray criado!");
  }

  // Adiciona um elemento ao final do array
  adicionar(elemento) {
    this.#items[this.#tamanho] = elemento;
    this.#tamanho++;
  }

  // Remove o último elemento do array
  remover() {

    if (this.#tamanho === 0) {
      return undefined;
    }

    const ultimoItem = this.#items[this.#tamanho - 1];

    delete this.#items[this.#tamanho - 1];
    this.#tamanho--;

    return ultimoItem; 
  }

  // Acessa o elemento em um índice específico
  obterElemento(indice) {

    if (indice < 0 || indice >= this.#tamanho) {
      return undefined;
    }

    return this.#items[indice];
  }

  // Remove todos os elementos
  limpar() {
    this.#items = [];
    this.#tamanho = 0;
  }

  // Retorna o tamanho do array
  tamanhoArray = () => this.#tamanho;

  // Retorna todos os itens
  verItens = () => this.#items;
}

module.exports = MeuArray;