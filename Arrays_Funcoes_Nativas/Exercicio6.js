/* O sistema do Call Center funciona como uma fila contínua. Entrou um
cliente novo na fila e o primeiro cliente foi atendido. Adicione o cliente
"Zélia" ao final da fila e remova o primeiro cliente da fila. Imprima a nova
fila. */

const filaAtendimento = ['Augusto', 'Bruna', 'Camila']


const ultimo = filaAtendimento.push('Zélia');
const primeiro = filaAtendimento.shift();

console.log(filaAtendimento);