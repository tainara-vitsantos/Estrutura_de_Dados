/* No arquivo Veiculos.js, crie as classes Carro e Moto. Exporte ambas. No
app.js, importe as duas e crie objetos testando métodos. */


class Veiculo {
    ano;
    modelo;
    velocidade;

    constructor(velocidadeInicial) {
        this.velocidade = velocidadeInicial;
    }

    acelerar() {
        this.velocidade += 50;
        console.log(`Acelerou! Velocidade atual: ${this.velocidade} km/h`);
    }

    frear() {
        this.velocidade -= 30;

        if (this.velocidade < 0) {
            this.velocidade = 0;
        }

        console.log(`Freou! Velocidade atual: ${this.velocidade} km/h`);
    }
}

class Carro extends Veiculo {
    constructor() {
        super(100); // velocidade inicial do carro
    }
}

class Moto extends Veiculo {
    constructor() {
        super(80); // velocidade inicial da moto
    }
}

export { Carro, Moto };