/* – Guardar um novo tesouro no baú.

– Retirar o último tesouro guardado.

– Olhar qual é o último tesouro sem pegá-lo.

– Saber se o baú está vazio. */

const Bau = require('./Bau.js');

const tesouro = new Bau();

tesouro.adicionar("Joias encantadas");
tesouro.adicionar("Talismãs de proteção");
tesouro.adicionar("Espadas lendárias");

console.log("Retirarando o último tesouro guardado: ",tesouro.remover()); //Saída: Espadas lendárias (Remove o elemento do topo)

console.log("O último tesouro do baú: ",tesouro.topo()); //Saída: Talismãs de proteção (Agora o topo é Talismãs de proteção)

console.log("O baú está vazio? ", tesouro.estaVazio()); // false 
