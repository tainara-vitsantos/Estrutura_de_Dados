/* Crie um objeto para armazenar informações de produtos de uma loja. As
chaves devem ser os códigos dos produtos, e os valores, objetos
contendo nome e preço. 
Itere sobre o dicionário e exiba os produtos com
preços acima de R$ 50. */

// Criando o objeto para armazenar os produtos (Chave: Códigos, Valores: Nome e preço)
const produtos = {
    101: { nome: "Mouse", preco: 45 },
    102: { nome: "Teclado", preco: 80 },
    103: { nome: "Monitor", preco: 600 },
    104: { nome: "Cabo USB", preco: 25 },
    105: { nome: "Nvme", preco: 120 }
};

// Iterando sobre os produtos
for (let codigo in produtos) { //Vou pegar um por um todos os códigos dos produtos cadastrados: pega o 102,103...
    let produto = produtos[codigo]; // sabendo o codigo pega o nome e o valor de cada codigo achado

    if (produto.preco > 50) {
        console.log(`Código: ${codigo}`);
        console.log(`Nome: ${produto.nome}`);
        console.log(`Preço: R$ ${produto.preco}`);
        console.log("----------------------");
    }
}