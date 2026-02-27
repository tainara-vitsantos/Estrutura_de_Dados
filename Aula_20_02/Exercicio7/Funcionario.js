/* Crie uma classe Funcionario em Funcionario.js com atributos nome e
salario, e um método calcularBonus().Depois crie classes
Gerente e Desenvolvedor que sobrescrevem esse método para
cálculos diferentes. No app.js, crie objetos de cada tipo e mostre os
bônus. */

class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    calcularBonus() {
        //padrão de 10%
        return this.salario * 0.10;
    }
}


class Gerente extends Funcionario {
    calcularBonus() {
        // gerente ganha 20%
        return this.salario * 0.20;
    }
}

class Desenvolvedor extends Funcionario {
    calcularBonus() {
        // desenvolvedor ganha 15%
        return this.salario * 0.15;
    }
}


export { Funcionario, Gerente, Desenvolvedor };
