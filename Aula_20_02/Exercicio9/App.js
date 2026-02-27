import Produto from "./Produto.js";
import Carrinho from "./Carrinho.js";

// Criando produtos
const produto1 = new Produto("Notebook", 3500);
const produto2 = new Produto("Mouse", 150);
const produto3 = new Produto("Teclado", 200);

// Criando carrinho
const carrinho = new Carrinho();

// Adicionando produtos
carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);
carrinho.adicionarProduto(produto3);

// Mostrando total
console.log("Total da compra: R$", carrinho.total());