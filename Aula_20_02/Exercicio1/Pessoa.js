/* Crie uma classe Pessoa em Pessoa.js com os atributos nome e idade e
um método apresentar(). No app.js, importe a classe, crie dois
objetos e chame o método para cada um */


class Pessoa {
  nome;
  idade;

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

export default Pessoa;