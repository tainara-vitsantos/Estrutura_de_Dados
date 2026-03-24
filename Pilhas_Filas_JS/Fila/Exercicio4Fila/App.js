// Importa a classe Fila do arquivo Fila.js
const Fila = require('./Fila.js'); 

// Criamos uma classe para representar um pedido
class Pedido {
    constructor(numero, descricao) {
        this.numero = numero; // Número do pedido
        this.descricao = descricao; // Descrição do pedido
    }
}

// Criamos uma fila para armazenar os pedidos do restaurante
const filaPedidos = new Fila();

// Adicionamos pedidos à fila
filaPedidos.enqueue(new Pedido(1, "Hambúrguer"));
filaPedidos.enqueue(new Pedido(2, "Pizza"));
filaPedidos.enqueue(new Pedido(3, "Salada"));

// Função que processa a fila de pedidos
function prepararPedido() {
    if (!filaPedidos.estaVazia()) {
        // Remove o primeiro pedido da fila
        let pedido = filaPedidos.dequeue(); 

        // Exibe o pedido em preparo
        console.log(`Preparando Pedido ${pedido.numero}: ${pedido.descricao}`); 

        // Simula um tempo aleatório para o preparo do pedido (1s a 4s)
        setTimeout(prepararPedido, Math.random() * 3000 + 1000);
    } else {
        console.log("Todos os pedidos foram preparados!"); // Mensagem final
    }
}

// Iniciamos o preparo dos pedidos
prepararPedido();