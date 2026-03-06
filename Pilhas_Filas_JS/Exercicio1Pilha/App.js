const Livros = require('./Livros.js');

/* 
– Adicionar um novo feitiço no topo da pilha.

– Remover o feitiço do topo (Eldrin usou e guardou em outro lugar).

– Ver qual feitiço está no topo sem removê-lo.

– Verificar se não há mais feitiços na pilha.  */


const feiticos = new Livros();

feiticos.adicionar("Vórtice Sombrio");
feiticos.adicionar("Círculo da Lua Negra");
feiticos.adicionar("Canto da Floresta");


console.log("Removendo o feitiço que Eldrin usou e guardou em outro lugar: ", feiticos.remover()); //Saída: Canto da Floresta (Remove o elemento do topo)

console.log("Feitiço no topo: ",feiticos.topo()); //Saída: Círculo da Lua Negra (Agora o topo é Círculo da Lua Negra)

console.log("A pilha está vazia? ",feiticos.estaVazia()); // false 