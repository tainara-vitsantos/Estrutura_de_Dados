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

const Clientes = require("./Clientes");

const atendimento = new Clientes();

atendimento.enqueue("Paciente 1");
atendimento.enqueue("Paciente 2");
atendimento.enqueue("Paciente 3");

let contadorPacientes = 4;
let ordem = 1;

function atenderCliente() {

    if (atendimento.estaVazio()) {
        console.log("Nenhum cliente na fila.");
    } else {
        let paciente = atendimento.dequeue();
        console.log(`O ${ordem}º paciente atendido foi: ${paciente}`);
        ordem++;
    }

    // chance de entrar novo cliente
    if (Math.random() < 0.5) {
        atendimento.enqueue("Paciente " + contadorPacientes);
        contadorPacientes++;
    }

    // tempo de atendimento entre 1 e 4 segundos
    let tempo = Math.floor(Math.random() * 3000) + 1000;

    setTimeout(atenderCliente, tempo);
}

atenderCliente();

