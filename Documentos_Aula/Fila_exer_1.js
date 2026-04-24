// Importa a classe Fila do arquivo Fila.js
const Fila = require('./Fila.js');

// Criamos uma nova fila de atendimento
const filaAtendimento = new Fila();

// Adicionamos clientes à fila
filaAtendimento.enqueue("Cliente 1");
filaAtendimento.enqueue("Cliente 2");
filaAtendimento.enqueue("Cliente 3");


function processarAtendimento() {

    // Enquanto a fila não estiver vazia, atendemos os clientes
    if (!filaAtendimento.estaVazia()) {
        // Define um tempo aleatório para o atendimento
        let tempo = Math.floor(Math.random() * 5000) + 1000;

         console.log(`Atendendo: ${filaAtendimento.dequeue()}`);

        // Remove e exibe o cliente atendido
        setTimeout(processarAtendimento, tempo);
    } else {
        console.log("Todos os clientes foram atendidos!"); // Mensagem final
    }
}

// Iniciamos o processo de atendimento
processarAtendimento()


