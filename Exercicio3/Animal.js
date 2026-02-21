/* Crie uma classe base Animal em Animal.js com um método falar().
Depois crie as subclasses Cachorro e Gato em arquivos separados
(Cachorro.js, Gato.js) que sobrescrevem o método falar(). No app.js,
importe e teste. */


// Classe Base
class Animal{
    falar(){
         console.log("O animal fez um som.");
    }

}
export default Animal;