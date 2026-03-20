/* Implemente uma função que receba uma string e retorne um objeto onde
as chaves são os caracteres e os valores, o número de vezes que
aparecem na string. Ignore os espaços. */

function contarCaracteres(texto) {
    const resultado = {};
  
    for (let letra of texto) {
      if (letra === " ") continue; // ignora espaços
  
      if (resultado[letra]) {
        resultado[letra]++; // já existe → soma 1
      } else {
        resultado[letra] = 1; // não existe → começa com 1
      }
    }
  
    return resultado;
  }
  console.log(contarCaracteres("banana"));
// { b: 1, a: 3, n: 2 }