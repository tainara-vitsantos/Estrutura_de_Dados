// Importa a classe Fila do arquivo Fila.js
const Fila = require('./Fila.js'); 

// Criamos uma fila para armazenar os visitantes do parque
const filaBrinquedo = new Fila();

// Adicionamos visitantes à fila
filaBrinquedo.enqueue("João");
filaBrinquedo.enqueue("Maria");
filaBrinquedo.enqueue("Lucas");

// Função que simula o embarque de visitantes no brinquedo
function processarBrinquedo() {
    if (!filaBrinquedo.estaVazia()) {

        // Remove o primeiro visitante da fila
        let visitante = filaBrinquedo.dequeue(); 

        // Exibe quem embarcou
        console.log(`${visitante} embarcou no brinquedo!`); 

        // Chamamos a função novamente após 2 segundos para o próximo visitante
        setTimeout(processarBrinquedo, 2000);
    } else {
        console.log("Todos os visitantes se divertiram!"); // Mensagem final
    }
}

// Iniciamos o processo de embarque
processarBrinquedo();