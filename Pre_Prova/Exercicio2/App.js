/* 2) Simule as funcionalidades de "Desfazer" e "Refazer" de um editor de texto com
duas pilhas: uma para as ações feitas, outra para as ações desfeitas.
Exemplo: Digitar "A", "B", "C", desfazer duas vezes, refazer uma vez. */

const Editor = require('./Editor.js');


const editor = new Editor();

editor.digitar("A");
editor.digitar("B");
editor.digitar("C");

editor.desfazer(); 
editor.desfazer();

editor.refazer();

editor.mostrar();