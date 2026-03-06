/* Crie uma classe Carro em Carro.js com atributos modelo, ano e
velocidade. Implemente os métodos acelerar() (aumenta 10 km/h)
e frear() (diminui 5 km/h). No app.js, simule uma corrida de 3
acelerações e 1 freada. */


class Carro {
    ano;
    modelo;
    velocidade = 0;

    acelerar() { /* aumenta 10 km/h */
        this.velocidade += 10;
        console.log(`Acelerou! Velocidade atual: ${this.velocidade} km/h`);
    }
    frear() { /* diminui 5 km/h */
        this.velocidade -= 5;

        if (this.velocidade < 0) {
            this.velocidade = 0;
        }

        console.log(`Freou! Velocidade atual: ${this.velocidade} km/h`);
    }

}

export default Carro;