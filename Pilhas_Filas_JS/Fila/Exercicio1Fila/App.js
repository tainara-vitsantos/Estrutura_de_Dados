/* Crie um sistema de atendimento onde clientes entram na fila e são 
atendidos na ordem de chegada.
 A cada iteração, um cliente deve ser removido da fila e exibido no console.
 Novos clientes podem ser 
adicionados aleatoriamente.

• Desafio Extra: Simule diferentes tempos de atendimento para cada cliente, 
usando setTimeout(). */

/* const Clientes = require("./Clientes");

const atendimento = new Clientes();

atendimento.enqueue("Paciente 1 Eduardo");
atendimento.enqueue("Paciente 2 Julia");
atendimento.enqueue("Paciente 3 Ana");
atendimento.enqueue("Paciente 4 Jorge");


console.log("O primeiro paciente a chegar foi:", atendimento.front()); // Saída: "Paciente 1"
console.log("O primeiro paciente a ser atendido foi:", atendimento.dequeue()); // Saída: "Paciente 1"
console.log("O segundo paciente a ser atendido foi :", atendimento.dequeue()); // Saída: "Paciente 2"

console.log(atendimento.dequeue()); // Saída: "Paciente 3"
console.log(atendimento.dequeue()); // Saída: "Paciente 4"

atendimento.enqueue("Paciente 5 Jonas "); 

console.log("O ultimo a chegar foi:", atendimento.front());
console.log("Falta ser atendido :", atendimento.tamanho() );
 */

const Fila = require('./Fila.js');

const filaAtendimento = new Fila();

// Adicionando clientes
filaAtendimento.enqueue("Paciente 1 Eduardo");
filaAtendimento.enqueue("Paciente 2 Julia");
filaAtendimento.enqueue("Paciente 3 Ana");
filaAtendimento.enqueue("Paciente 4 Jorge");

// Ver primeiro da fila
console.log("Primeiro da fila:", filaAtendimento.front());

// Enquanto a fila não estiver vazia, atendemos os clientes
function processarAtendimento() {
    if (!filaAtendimento.estaVazio()) {
        let tempo = Math.floor(Math.random() * 5000) + 1000;

        console.log("Atendendo:", filaAtendimento.dequeue());
        
        // Remove e exibe o cliente atendido
        setTimeout(processarAtendimento, tempo);
    } else {
        console.log("Todos os pacientes foram atendidos!");
    }
}

// Iniciar atendimento
processarAtendimento();