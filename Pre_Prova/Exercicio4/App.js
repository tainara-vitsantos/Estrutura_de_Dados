/* 4) Crianças entram na fila da montanha-russa. Cada criança leva x segundos para
brincar. Simule a entrada (enqueue) e atendimento (dequeue), imprimindo quem
está sendo atendido e o tempo restante. */

const Fila = require('./Fila.js');

const fila = new Fila();

//  Crianças entrando
fila.entrar({ nome: "Ana", tempo: 3 });
fila.entrar({ nome: "Bruno", tempo: 2 });
fila.entrar({ nome: "Carlos", tempo: 4 });

console.log("\n--- Iniciando atendimento ---");

// Simulação
function simular(fila) {
    let tempoTotal = 0;

    while (!fila.estaVazia()) {
        const crianca = fila.atender();

        console.log(`\nAtendendo: ${crianca.nome}`);

        for (let i = crianca.tempo; i > 0; i--) {
            console.log(`Tempo restante de ${crianca.nome}: ${i}s`);
        }

        tempoTotal += crianca.tempo;
    }

    console.log(`\nTempo total da fila: ${tempoTotal}s`);
}

simular(fila);