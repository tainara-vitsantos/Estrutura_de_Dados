/*  Use a estrutura para simular o histórico de páginas acessadas. Com 
traverseReverse, mostre a navegação para trás (voltar página). 
Extra: implementar "ir para página específica" usando find. */


const DoubleLinkedList = require('./DoubleLinkedList');

const historico = new DoubleLinkedList();

historico.append("www.google.com");
historico.append("www.facebook.com");
historico.append("www.twitter.com");

console.log("Ultimos sites visitados:(ordem reversa)");
historico.traverseReverse();

console.log("\nBuscando por www.facebook.com...");
const pagina = historico.find("www.facebook.com");
if (pagina) {
    console.log("Página encontrada: " + pagina);
} else {    
    console.log("Página não encontrada.");
}


