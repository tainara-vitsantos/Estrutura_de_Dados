/* Implemente uma variação da fila onde clientes com mais de 60 anos passam na
frente. (Dica: fazer com duas filas e intercalar atendimento.) 1 prioritario 1 normal intercalando */

const Fila = require('./Fila.js');

let filaNormal = new Fila();
let filaPreferencial = new Fila();

function enfileirar(nome, idade) {
    if (idade >= 60) {
        filaPreferencial.enqueue(nome);
    } else {
        filaNormal.enqueue(nome);
    }
}

enfileirar("Dona Maria", 65);
enfileirar("Carlos", 30);
enfileirar("Seu João", 70);
enfileirar("Ana", 25);

let vezPreferencial = true;

while (!filaNormal.isEmpty() || !filaPreferencial.isEmpty()) {

    if (vezPreferencial && !filaPreferencial.isEmpty()) {
        console.log("Atendendo:", filaPreferencial.dequeue());
        vezPreferencial = false;

    } else if (!filaNormal.isEmpty()) {
        console.log("Atendendo:", filaNormal.dequeue());
        vezPreferencial = true;

    } else if (!filaPreferencial.isEmpty()) {
        console.log("Atendendo:", filaPreferencial.dequeue());
    }
}