class Carrinho {
    constructor() {
        this.produtos = [];
    }
    //.push() → adiciona um item no final do array
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    //.reduce() → percorre o array e transforma tudo em um único valor.
    total() {
        return this.produtos.reduce((soma, produto) => {
            return soma + produto.preco;
        }, 0); // 0 fora é o valor inicial da soma.
    }
}

export default Carrinho;