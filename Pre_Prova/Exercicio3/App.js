/* Módulos espaciais pousam um sobre o outro. O último a pousar é o primeiro a sair
da base. Simule essa sequência com uma pilha e peça para exibir a ordem de
retorno à nave. */

const ModuloEspacial = require('./ModuloEspacial.js');

const base = new ModuloEspacial();

// Módulos pousando
base.pousar("Módulo A");
base.pousar("Módulo B");
base.pousar("Módulo C");
base.pousar("Módulo D");

console.log("\n--- Ordem de retorno à nave ---");

//Retorno (LIFO)
while (!base.estaVazia()) {
    base.retornar();
}