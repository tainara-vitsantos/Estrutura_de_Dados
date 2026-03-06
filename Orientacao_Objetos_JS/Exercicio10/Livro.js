/* Crie um Projeto, que contenha:
– Livro.js → classe com titulo, autor e ano.
– Biblioteca.js → classe que mantém um array (vetor)
de livros com métodos adicionarLivro(),
listarLivros() e buscarPorAutor(autor).
– app.js → monte uma biblioteca com pelo menos 3
livros e faça buscas por autor. */


export default class Livro {
  constructor(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }
}