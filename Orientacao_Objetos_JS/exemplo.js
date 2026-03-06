class Animal
{
    qnt_patas;
    nome;
    especie;
    peso;
    alimento;

    constructor(_nome, _patas)
    {
        this.nome = _nome;
        this.qnt_patas = _patas;
    }

    andar() { console.log(`${this.nome} está andando com ${this.qnt_patas} patas`) }
    comer(_racao) 
    { 
        console.log(`Está comendo ${_racao}`);
        this.alimento = _racao;  
    }
    
    
    som() {}
}


let y = new Animal("LOrival, o canarinho", 2);
y.andar();
y.comer("Alpiste");

class Gato extends Animal
{
    pelo;

    som()
    {
        console.log("miau");
    }
}

let x = new Gato("Nicolau Silva o gato", 4);
x.andar();
x.som();
x.comer();
console.log(x.alimento);