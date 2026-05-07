const poderes = new LinkedList();

// Adicionar poderes no início e no fim
poderes.insertAtBeginning("Super Força"); 
poderes.insertAtEnd("Raio Congelante"); 
poderes.insertAtEnd("Escudo de Fogo"); 

// Remover o poder "Raio Congelante"
poderes.removeByValue("Raio Congelante");

// Verificar se "Escudo de Fogo" está disponível
const escudoDisponivel = poderes.find("Escudo de Fogo");
console.log(escudoDisponivel ? "Escudo de Fogo disponível!" : "Poder não encontrado.");