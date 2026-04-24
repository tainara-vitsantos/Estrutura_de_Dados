export default class MeuArray {

  #items = []; 
  #tamanho = 0; 

  constructor() {
    console.log("MeuArray criado!");
  }

  // Adiciona elemento
  adicionar(elemento) {
    this.#items[this.#tamanho] = elemento; 
    this.#tamanho++; 
  }

  // Remove último
  remover() {
    if (this.#tamanho === 0) {
      return undefined;
    }

    const ultimoItem = this.#items[this.#tamanho - 1];

    delete this.#items[this.#tamanho - 1];
    this.#tamanho--;

    return ultimoItem; 
  }

  // Obter elemento por índice
  obterElemento(indice) {
    if (indice < 0 || indice >= this.#tamanho) {
      return undefined;
    }
    return this.#items[indice];
  }

  // Limpar tudo
  limpar() {
    this.#items = [];
    this.#tamanho = 0;
  }

  // Tamanho
  tamanhoArray = () => this.#tamanho;

  // Ver itens (cópia segura)
  verItens = () => [...this.#items];

  // Editar item
  editar(indice, novoValor) {
    if (indice >= 0 && indice < this.#tamanho) {
      this.#items[indice] = novoValor;
    }
  }

  // Buscar índice
  obterIndice(valorProcurado) {
    for (let i = 0; i < this.#tamanho; i++) {
      if (this.#items[i] === valorProcurado) {
        return i;
      }
    }
    return -1;
  }
}