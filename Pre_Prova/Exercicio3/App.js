/* Módulos espaciais pousam um sobre o outro. O último a pousar é o primeiro a sair
da base. Simule essa sequência com uma pilha e peça para exibir a ordem de
retorno à nave. */


const ModuloEspacial = require("./ModuloEspacial");

const pilha = new ModuloEspacial();

// Empilhando módulos (pouso)
pilha.push("Módulo Alpha");
pilha.push("Módulo Beta");
pilha.push("Módulo Gama");

console.log("Ordem de retorno:");

// Desempilhando (retorno)
while (!pilha.isEmpty()) {
    console.log(pilha.pop());
}
