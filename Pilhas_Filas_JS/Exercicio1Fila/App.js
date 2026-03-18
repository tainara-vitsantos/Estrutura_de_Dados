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

// Entrando na fila
atendimento.enqueue("Paciente 1 Eduardo");
atendimento.enqueue("Paciente 2 Julia");
atendimento.enqueue("Paciente 3 Ana");
atendimento.enqueue("Paciente 4 Jorge");

// Ver quem é o primeiro
console.log("Primeiro da fila:", atendimento.front()); // É espiar quem tá na frente da fila

// Atendendo na ordem
console.log("Atendido:", atendimento.dequeue());//É quando o primeiro da fila vai embora pra ser atendido
console.log("Atendido:", atendimento.dequeue());

// Mostrando fila atual
console.log("Fila atual:", atendimento.fila);

// Continuando atendimento
console.log("Atendido:", atendimento.dequeue());
console.log("Atendido:", atendimento.dequeue());

// Fila agora deve estar vazia
console.log("Fila atual:", atendimento.fila);

// Novo paciente chega
atendimento.enqueue("Paciente 5 Jonas");

// Mostrando fila final
console.log("Fila atual:", atendimento.fila);