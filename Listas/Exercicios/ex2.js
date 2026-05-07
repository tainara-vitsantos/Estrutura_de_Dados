

const filaTartarugas = new LinkedList();

// Inserir tartarugas no início e no final
filaTartarugas.insertAtBeginning("Tartaruga 1");
filaTartarugas.insertAtEnd("Lenta"); 
filaTartarugas.insertAtEnd("Veloz"); 

// Remover a tartaruga "Lenta"
filaTartarugas.removeByValue("Lenta"); 

// Encontrar a posição da tartaruga "Veloz"
const buscaVeloz = filaTartarugas.find("Veloz"); 
if (buscaVeloz) {
    console.log("Tartaruga Veloz encontrada na fila.");
}