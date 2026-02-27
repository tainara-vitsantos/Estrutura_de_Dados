import Livro from "./Livro.js";
import Biblioteca from "./Biblioteca.js";

// Criando livros
const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899);
const livro2 = new Livro("Memórias Póstumas", "Machado de Assis", 1881);
const livro3 = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943);

// Criando biblioteca
const biblioteca = new Biblioteca();

// Adicionando livros
biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);

// Listando todos
console.log(" Todos os livros:");
biblioteca.listarLivros();

// Buscando por autor
console.log("\n Livros de Machado de Assis:");
const encontrados = biblioteca.buscarPorAutor("Machado de Assis");

encontrados.forEach((livro) => {
  console.log(`${livro.titulo} (${livro.ano})`);
});