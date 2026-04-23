
 
import Stack from './Stack.js';

const stack = new Stack();
const cartas = ['A', 'B', 'C', 'D', 'E'];

// Empilhando
for (let carta of cartas) {
    console.log("Empilhando:", carta);
    stack.push(carta);
}

console.log("Pilha completa:");
stack.print();

// Desempilhando
console.log("\nDesempilhando:");
while (!stack.isEmpty()) {
    console.log("Retirando carta:", stack.pop());
}