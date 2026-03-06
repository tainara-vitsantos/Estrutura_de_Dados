//Como usar a classe

import MeuArray from "./MeuArray.js";

const minha_variavel = new MeuArray();

minha_variavel.adicionar(10);
minha_variavel.adicionar(20);
minha_variavel.adicionar(30);
console.table(minha_variavel.verItens());

console.log(minha_variavel.obterElemento(1));  // Saída: 20
console.log(minha_variavel.tamanhoArray());    // Saída: 3

// Saída: 30 (Remove o último elemento)
console.log(minha_variavel.remover());
console.log(minha_variavel.tamanhoArray());    // Saída: 2
console.table(minha_variavel.verItens());