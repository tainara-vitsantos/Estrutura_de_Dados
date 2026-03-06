/*  No app.js, importe a classe, crie dois
objetos e chame o método para cada um */

import Pessoa from './Pessoa.js';

const pessoa1 = new Pessoa();
pessoa1.nome = 'Jonas';
pessoa1.idade = 40;


const pessoa2 = new Pessoa();
pessoa2.nome = 'Ana Paula';
pessoa2.idade = 45;

pessoa1.apresentar(); //metodo
pessoa2.apresentar(); 