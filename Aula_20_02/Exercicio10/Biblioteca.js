export default class Biblioteca {
  constructor() {
    this.livros = [];
  }

  adicionarLivro(livro) {
    this.livros.push(livro);
  }

  listarLivros() {
    this.livros.forEach((livro) => {
      console.log(`${livro.titulo} - ${livro.autor} (${livro.ano})`);
    });
  }

  buscarPorAutor(autor) {
    return this.livros.filter((livro) => livro.autor === autor);
  }
}