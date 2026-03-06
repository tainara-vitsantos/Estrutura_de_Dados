import Funcionario from "./Funcionario.js";

const rh = new Funcionario();

rh.adicionar("Ana");
rh.adicionar("Bruno");
rh.adicionar("Carlos");
rh.adicionar("Daniela");

console.log("Terceiro funcionário:", rh.obterElemento(2)); // Carlos (índice 2)

rh.limpar(); // Limpa tudo

console.table(rh.verItens());


// Respostas das perguntas do PDF:
// - Após limpar, o acesso a qualquer índice retornará 'undefined'.
// - Para garantir nomes únicos, o método 'adicionar' precisaria de um 'if' usando o método 'obterIndice' para checar se o nome já existe antes de inserir.