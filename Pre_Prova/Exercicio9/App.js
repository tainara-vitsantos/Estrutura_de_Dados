/* Cada nó é uma música de uma playlist. Insira músicas no fim, remova uma 
específica e permita busca por nome. 
Desafio extra: Adicionar opção de "tocar próxima" (avançar no ponteiro).  */

const LinkedList = require('./LinkedList');

let playlist = new LinkedList();

playlist.insertAtEnd("Música A");
playlist.insertAtEnd("Música B");
playlist.insertAtEnd("Música C");

console.log("Playlist atual:");
playlist.printList();

// Remover
console.log("\nRemovendo 'Música B'...");
playlist.removeByValue("Música B");

console.log("Playlist atualizada:");
playlist.printList();

// Buscar
console.log("\nBuscando 'Música C'...");
let musica = playlist.find("Música C");
console.log(musica ? "Tocando: " + musica.value : "Música não encontrada");


// 🎧 Testando navegação
console.log("\nNavegando pela playlist:");
playlist.playCurrent();  // Música A
playlist.nextSong();     // Música C
playlist.nextSong();     // Fim da playlist


