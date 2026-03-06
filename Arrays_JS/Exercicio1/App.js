
import Array from "./Array.js";

const tarefas = new Array();

// Adicionar cinco tarefas
tarefas.adicionar("Lavar louça");
tarefas.adicionar("Estudar JS");
tarefas.adicionar("Fazer academia");
tarefas.adicionar("Ler livro");
tarefas.adicionar("Trabalhar");

// Remover a última tarefa ("Trabalhar")
tarefas.remover();

// Exibir tarefas
console.table(tarefas.verItens());

// Respostas das perguntas do PDF:
// - O que acontece ao acessar um índice fora do tamanho? Retorna 'undefined'.
// - Como garantir a ordem? Através do controle rigoroso da variável 'this.tamanho' como chave do objeto.