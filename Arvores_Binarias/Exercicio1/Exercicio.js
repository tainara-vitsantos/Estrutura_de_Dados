/* 
BENCHMARK DE ESTRUTURAS DE DADOS

Testa:
- Inserção
- Listagem
- Remoção

Estruturas:
- Array
- Stack (Pilha)
- Queue (Fila)
- Árvore Binária

Cada uma com 10.000 elementos
*/

// Importa performance (necessário no Node)
const { performance } = require('perf_hooks');

// Importa sua árvore
const { BinaryTree } = require('./BinaryTree.js');

// Quantidade de elementos
const SIZE = 10000;


// =====================
// FUNÇÃO DE MEDIÇÃO
// =====================
function medirTempo(nome, func) {
    const inicio = performance.now(); // tempo inicial

    func(); // executa a função

    const fim = performance.now(); // tempo final

    console.log(`${nome}: ${(fim - inicio).toFixed(2)} ms`);
}


// =====================
// ARRAY
// =====================
function testArray() {
    let arr = [];

    medirTempo("Array - Inserção", () => {
        for (let i = 0; i < SIZE; i++) {
            arr.push(i); // insere no final
        }
    });

    medirTempo("Array - Listagem", () => {
        arr.forEach(() => {}); // percorre todos
    });

    medirTempo("Array - Remoção", () => {
        while (arr.length > 0) {
            arr.pop(); // remove do final
        }
    });
}


// =====================
// STACK (PILHA)
// =====================
function testStack() {
    let stack = [];

    medirTempo("Stack - Inserção", () => {
        for (let i = 0; i < SIZE; i++) {
            stack.push(i); // empilha
        }
    });

    medirTempo("Stack - Listagem", () => {
        stack.forEach(() => {});
    });

    medirTempo("Stack - Remoção", () => {
        while (stack.length > 0) {
            stack.pop(); // desempilha
        }
    });
}


// =====================
// QUEUE (FILA)
// =====================
function testQueue() {
    let queue = [];

    medirTempo("Queue - Inserção", () => {
        for (let i = 0; i < SIZE; i++) {
            queue.push(i); // entra no final
        }
    });

    medirTempo("Queue - Listagem", () => {
        queue.forEach(() => {});
    });

    medirTempo("Queue - Remoção", () => {
        while (queue.length > 0) {
            queue.shift(); // remove do início (lento ⚠️)
        }
    });
}


// =====================
// ÁRVORE BINÁRIA
// =====================
function testTree() {
    let tree = new BinaryTree();

    medirTempo("Tree - Inserção", () => {
        for (let i = 0; i < SIZE; i++) {
            tree.insert(i);
        }
    });

    medirTempo("Tree - Listagem", () => {
        // ⚠️ IMPORTANTE: não pode ter console.log dentro do inOrder
        tree.inOrder();
    });

    medirTempo("Tree - Remoção", () => {
        for (let i = 0; i < SIZE; i++) {
            tree.remove(i);
        }
    });
}


// =====================
// EXECUÇÃO
// =====================
console.log("=== BENCHMARK ===\n");

testArray();
console.log("");

testStack();
console.log("");

testQueue();
console.log("");

testTree();