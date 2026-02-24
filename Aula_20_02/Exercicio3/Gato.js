
import Animal from './Animal.js'

//Subclasse

class Gato extends Animal{
    falar(){
        console.log(`O gato disse: Miau! Miau!`)
    }
}

export default Gato;