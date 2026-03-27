const Fila = require('./ImplementacaoMetodo.js');

const minha_variavel = new Fila();

minha_variavel.enqueue("Cliente 1");
minha_variavel.enqueue("Cliente 2");
minha_variavel.enqueue("Cliente 3");

console.log(minha_variavel.front());   // Saída: "Cliente 1"
console.log(minha_variavel.dequeue()); // Saída: "Cliente 1"
console.log(minha_variavel.dequeue()); // Saída: "Cliente 2"

minha_variavel.enqueue("Cliente 4");

// Saída: 2 (Cliente 3 e Cliente 4 ainda estão na fila)
console.log(minha_variavel.tamanho());
console.log(minha_variavel.front());   // Saída: "Cliente 3"