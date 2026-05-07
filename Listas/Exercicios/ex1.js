



const trilha = new LinkedList();
trilha.insertAtBeginning("Cachoeira");
trilha.insertAtEnd("Caverna");
trilha.insertAtEnd("Mirante");

console.log("Trilha original:", trilha.toString());

trilha.removeByValue("Caverna");
console.log("Após remover perigo:", trilha.toString());

const busca = trilha.find("Mirante");
console.log(busca ? "Mirante encontrado!" : "Não encontrado.");