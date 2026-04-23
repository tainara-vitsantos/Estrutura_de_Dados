/* 2) Simule as funcionalidades de "Desfazer" e "Refazer" de um editor de texto com
duas pilhas: uma para as ações feitas, outra para as ações desfeitas.
Exemplo: Digitar "A", "B", "C", desfazer duas vezes, refazer uma vez. */

const Editor = require("./Editor");

// Pilhas
let desfazer = []; // ações feitas
let refazer = [];  // ações desfeitas

// Função para digitar
function digitar(letra) {
    desfazer.push(letra);
    refazer = []; // limpa refazer ao adicionar nova ação
    console.log("Digitou:", letra);
}

// Função desfazer (UNDO)
function desfazerAcao() {
    if (desfazer.length === 0) {
        console.log("Nada para desfazer");
        return;
    }

    let ultima = desfazer.pop();
    refazer.push(ultima);
    console.log("Desfez:", ultima);
}

// Função refazer (REDO)
function refazerAcao() {
    if (refazer.length === 0) {
        console.log("Nada para refazer");
        return;
    }

    let voltar = refazer.pop();
    desfazer.push(voltar);
    console.log("Refaz:", voltar);
}

// Mostrar conteúdo atual
function mostrarTexto() {
    console.log("Conteúdo atual:", desfazer.join(''));
}

// Simulação
digitar("A");
digitar("B");
digitar("C");
mostrarTexto(); // ABC
desfazerAcao(); // Desfaz C
desfazerAcao(); // Desfaz B
mostrarTexto(); // A
refazerAcao(); // Refaz B
mostrarTexto(); // AB           

