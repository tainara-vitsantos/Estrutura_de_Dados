import MeuArray from "./MeuArray.js";

const tarefas = new MeuArray();

console.log("=== EXERCÍCIO 1: GERENCIAMENTO DE TAREFAS ===");

// 1. Adicionando 5 tarefas
tarefas.adicionar("Lavar louça");
tarefas.adicionar("Estudar JS");
tarefas.adicionar("Fazer academia");
tarefas.adicionar("Ler livro");
tarefas.adicionar("Trabalhar");

console.log("Tarefas após adicionar 5 itens:");
console.table(tarefas.verItens());

// 2. Removendo a última (Trabalhar)
tarefas.remover();
console.log("Tarefas após remover a última:");
console.table(tarefas.verItens());

// 3. Obtendo um elemento específico e o tamanho
console.log("Elemento no índice 1:", tarefas.obterElemento(1)); // Saída: Estudar JS
console.log("Tamanho atual do array:", tarefas.tamanhoArray()); // Saída: 4


console.log("\n=== EXERCÍCIO 3: NOVAS FUNCIONALIDADES ===");

// 4. Testando 'obterIndice' (Busca)
// Vamos descobrir onde está a academia
const indiceAcademia = tarefas.obterIndice("Fazer academia");
console.log(`O item 'Fazer academia' está na posição: ${indiceAcademia}`);

// 5. Testando 'editar' (Atualização)
// Vamos mudar "Ler livro" (que está no índice 3) para "Ler Documentação"
console.log("Editando o índice 3...");
tarefas.editar(3, "Ler Documentação");

// 6. Testando busca por item inexistente
const buscaInexistente = tarefas.obterIndice("Jogar Bola");
console.log(`Índice de 'Jogar Bola' (não existe): ${buscaInexistente}`); // Deve retornar -1

// Resultado Final
console.log("\nEstado final do nosso Array Customizado:");
console.table(tarefas.verItens());