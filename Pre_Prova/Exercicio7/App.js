/* Cada nó representa um corredor. Simule a passagem do bastão com insertAtEnd
e remova um corredor machucado com removeByValue. Mostre a lista após cada
modificação. */

const LinkedList  = require('./LinkedList.js');

let corredores = new LinkedList();
corredores.insertAtEnd("Corredor 1");
corredores.insertAtEnd("Corredor 2");
corredores.insertAtEnd("Corredor 3");

console.log("Passagem do bastão:");
console.log("Corredores na pista:", corredores.toString());

console.log("Corredor 2 se machucou e precisa ser removido.");
corredores.removeByValue("Corredor 2");

console.log("Corredores na pista após remoção:", corredores.toString());


