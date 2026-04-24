/* Usuário monta uma lista de compras com insertAtBeginning e insertAtEnd.
Permita remover itens com removeByValue e buscar com find. Imprima a lista em
cada etapa. */

const LinkedList  = require('./LinkedList.js');

let listaDeCompras = new LinkedList();
listaDeCompras.insertAtEnd("Leite");
listaDeCompras.insertAtEnd("Pão");
listaDeCompras.insertAtBeginning("Ovos");

console.log("Lista de Compras:");
console.log(listaDeCompras.toString());

console.log("Removendo Pão da lista.");
listaDeCompras.removeByValue("Pão");

console.log("Lista de Compras após remoção:");
console.log(listaDeCompras.toString());

console.log("Buscando Leite na lista.");
let leiteEncontrado = listaDeCompras.find("Leite");
console.log("Leite encontrado:", leiteEncontrado);

