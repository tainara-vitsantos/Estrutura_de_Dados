const Pilha = require('./Pilha');

const tesouros = new Pilha();

// Tomando como base que o baú já contém alguns tesouros:
tesouros.adicionar("Colar de Pérolas");
tesouros.adicionar("Moedas de Ouro");

// Guardar um novo tesouro no baú.
tesouros.adicionar("Coroa de Diamantes");

// Retirar o último tesouro guardado.
console.log(tesouros.remover()); // "Coroa de Diamantes" 

// Olhar qual é o último tesouro sem pegá-lo
console.log(tesouros.topo());    // "Moedas de Ouro"

// Saber se o baú está vazio.
console.log(tesouros.estaVazia()); // false