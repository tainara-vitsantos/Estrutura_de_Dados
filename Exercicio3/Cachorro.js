import Animal from './Animal.js'

//Subclasse

class Cachorro extends Animal{
    falar(){
        console.log(`O cachorro disse: Au Au!`)
    }
}

export default Cachorro;