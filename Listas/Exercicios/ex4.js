


const listaTeste = new LinkedList();

// Povoando a lista para testes
listaTeste.insertAtEnd(10);
listaTeste.insertAtEnd(20);
listaTeste.insertAtEnd(30);

// a) Teste de remoção de valor específico
console.log("Antes da remoção:", listaTeste.toString()); 
listaTeste.removeByValue(20); 
console.log("Após remover 20:", listaTeste.toString());

// b) Teste de busca de valor
const valorParaBuscar = 30;
const resultadoBusca = listaTeste.find(valorParaBuscar);
console.log(resultadoBusca ? `Valor ${valorParaBuscar} está na lista.` : "Valor não encontrado.");