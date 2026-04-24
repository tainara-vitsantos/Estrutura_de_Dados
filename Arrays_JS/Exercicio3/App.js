import MeuArray from "./MeuArray.js";

const gaveta = new MeuArray(); 

gaveta.adicionar("Tarefa 1"); // 0 
gaveta.adicionar("Tarefa 2"); // 1
gaveta.adicionar("Tarefa 3"); // 2

console.log(gaveta.verItens());  
console.log("=====================");

gaveta.editar(1, "Tarefa Atualizada"); 
console.log(gaveta.verItens());  

console.log(gaveta.obterIndice("Tarefa 3"));