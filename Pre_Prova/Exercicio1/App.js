const Cartas = require ('./Cartas.js')

// Um mágico embaralha 5 cartas com os valores A, B, C, D, E e as empilha.

const cartas = new Cartas();

cartas.adicionar("Carta B");
cartas.adicionar("Carta D");
cartas.adicionar("Carta E");
cartas.adicionar("Carta A");
cartas.adicionar("Carta C");


//mostrando que o último a entrar é o primeiro a sair (LIFO):

console.log("Removendo a ultima carta que entrou na pilha: ", cartas.remover()); //Saida: Carta C (remove o elemento do topo)

console.log("Removendo a ultima carta que entrou na pilha: ", cartas.remover()); //Saida: Carta A (remove o elemento do topo)

console.log("Removendo a ultima carta que entrou na pilha: ", cartas.remover()); //Saida: Carta E (remove o elemento do topo)

console.log("Removendo a ultima carta que entrou na pilha: ", cartas.remover()); //Saida: Carta D (remove o elemento do topo)

console.log("Removendo a ultima carta que entrou na pilha: ", cartas.remover()); //Saida: Carta B (remove o elemento do topo)

console.log("A pilha está vazia? ",cartas.estaVazia()); // true

