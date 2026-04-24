/* Cada letra digitada é um nó. O cursor pode ir para frente e para trás (simulando o 
next e prev). Permita inserções e remoções em qualquer posição (insertAt, 
removeAt).  */


const DoubleLinkedList = require('./DoubleLinkedList');

const list = new DoubleLinkedList();

list.insertAt("H" , 0); 
list.insertAt("E" , 1); 
list.insertAt("L" , 2);
list.insertAt("L" , 3);
list.insertAt("O" , 4);

console.log("Lista atual:");
list.traverse();

console.log("\nRemovendo letra na posição 1...");
list.removeAt(1);

console.log("Lista atualizada:");
list.traverse();

