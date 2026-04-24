
/* Cada vagão é um nó. Simule adicionar vagões à frente e atrás. Mostre a composição 
do trem indo e voltando com traverse e traverseReverse. */

const DoubleLinkedList = require('./DoubleLinkedList');

let trem = new DoubleLinkedList();

trem.append("Vagão 1");
trem.append("Vagão 2");
trem.prepend("Locomotiva");

console.log("Composição do trem normal: ");
trem.traverse(); // Locomotiva, Vagão 1, Vagão 2

console.log("\nComposição do trem reversa: ");
trem.traverseReverse(); // Vagão 2, Vagão 1, Locomotiva



