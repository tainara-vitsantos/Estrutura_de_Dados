/* Crie classes Produto (com nome e preço) e Carrinho (com lista de
produtos e método total()). Salve cada uma em arquivos separados.
No app.js, crie produtos, adicione no carrinho e mostre o valor total. */


class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

export default Produto;