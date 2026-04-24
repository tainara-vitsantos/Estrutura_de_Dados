/* 4) Crianças entram na fila da montanha-russa. Cada criança leva x segundos para
brincar. Simule a entrada (enqueue) e atendimento (dequeue), imprimindo quem
está sendo atendido e o tempo restante. */

const Fila = require('./Fila.js');

// Simulação da montanha-russa
let fila = new Fila();

fila.enqueue("Lucas");
fila.enqueue("Ana");
fila.enqueue("João");

while (!fila.isEmpty()) {
let tempo = Math.floor(Math.random() * 3000) + 1000;
console.log(`Brincando: ${fila.dequeue()} por ${tempo}ms`);
}


