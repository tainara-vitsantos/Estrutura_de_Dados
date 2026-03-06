const MinhaPilha = require('./AtributosClasse.js');

//Exemplo de uso
const numero = new MinhaPilha();

numero.adicionar("b");
numero.adicionar(20);
numero.adicionar(30);

console.log(numero.topo()); //Saída: 30 (Elemento do topo)

console.log(numero.remover()); //Saída: 30 (Remove o elemento do topo)

console.log(numero.topo()); //Saída: 20 (Agora o topo é 20)

console.log(numero.tamanhoPilha()); //Saída: 2 (Dois elementos restantes)