// Importa a classe Fila do arquivo Fila.js
const Fila = require('./Fila.js'); 

// Criamos uma classe para representar um cliente
class Cliente {
    constructor(nome, produtos) {
        this.nome = nome; // Nome do cliente
        this.produtos = produtos; // Número de produtos que o cliente tem
    }
}

// Criamos uma fila para armazenar os clientes no supermercado
const filaSupermercado = new Fila();

// Adicionamos clientes à fila com um número aleatório de produtos
filaSupermercado.enqueue(new Cliente("Carlos", 3));
filaSupermercado.enqueue(new Cliente("Ana", 7));
filaSupermercado.enqueue(new Cliente("João", 5));

// Função que processa o caixa do supermercado
function processarCaixa() {
    if (!filaSupermercado.estaVazia()) {

        // Remove o primeiro cliente da fila
        let cliente = filaSupermercado.dequeue(); 

        // Exibe o cliente atendido
        console.log(`${cliente.nome} está passando ${cliente.produtos} produtos no caixa.`); 

        // Cada produto leva 500ms para ser processado, então ajustamos o tempo dinamicamente
        setTimeout(processarCaixa, cliente.produtos * 500);
    } else {
        console.log("Todos os clientes foram atendidos!"); // Mensagem final
    }
}

// Iniciamos o processo do caixa
processarCaixa();
