/* 5) Clientes fazem pedidos num drive-thru. Crie uma fila que registra os pedidos por
nome e imprima a sequência de atendimento.
Extra: calcule tempo total de espera se cada atendimento dura 2 minutos.*/


const Fila = require('./Fila.js');

let pedidos = new Fila();
pedidos.enqueue("Pedido do João");
pedidos.enqueue("Pedido da Maria");
pedidos.enqueue("Pedido da Carla");

let tempoPorPedido = 2; // em minutos
let total = 0;

while (!pedidos.isEmpty()) {
let pedido = pedidos.dequeue();
total += tempoPorPedido;
console.log(`${pedido} atendido. Tempo acumulado: ${total}
minutos`);
}

console.log(`Tempo total de espera: ${total} minutos`);