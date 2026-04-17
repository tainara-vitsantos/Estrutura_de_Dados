/* const { BinaryTree } = require('./BinaryTree.js');

// Exemplo de uso da árvore binária
const tree = new BinaryTree();
tree.insert(15);
tree.insert(10);
tree.insert(20);
tree.insert(8);
tree.insert(12);
tree.insert(18);
tree.insert(25);

console.log("Percurso em-ordem:");
tree.inOrder();

console.log("Buscar valor 18:");
console.log(tree.search(18) ? "Encontrado" : "Não encontrado");

console.log("Remover valor 10:");
tree.remove(10);
tree.inOrder(); */


const { BinaryTree } = require('./BinaryTree.js');

const tree = new BinaryTree();

// Inserindo valores
tree.insert(15);
tree.insert(10);
tree.insert(20);
tree.insert(8);
tree.insert(12);
tree.insert(18);
tree.insert(25);

console.log("Percurso em-ordem:");
tree.inOrder(); // Deve sair ordenado

console.log("\nBuscar valor 18:");
console.log(tree.search(18) ? "Encontrado" : "Não encontrado");

console.log("\nBuscar valor 99:");
console.log(tree.search(99) ? "Encontrado" : "Não encontrado");

console.log("\nRemover valor 10:");
tree.remove(10);

console.log("\nPercurso em-ordem após remoção:");
tree.inOrder();