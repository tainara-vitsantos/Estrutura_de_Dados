/* 2) Simule as funcionalidades de "Desfazer" e "Refazer" de um editor de texto com
duas pilhas: uma para as ações feitas, outra para as ações desfeitas.
Exemplo: Digitar "A", "B", "C", desfazer duas vezes, refazer uma vez. */


class Editor {
    constructor() {
        this.pilhaFeita = []; // Pilha para ações feitas
        this.pilhaDesfeita = []; // Pilha para ações desfeitas
        this.texto = ""; // Texto atual do editor
    }       
    digitar(caractere) {
        this.pilhaFeita.push(caractere); // Adiciona o caractere à pilha de ações feitas
        this.texto += caractere; // Atualiza o texto do editor
        this.pilhaDesfeita = []; // Limpa a pilha de ações desfeitas
    }
    desfazer() {
        if (this.pilhaFeita.length > 0) {
            const ultimaAcao = this.pilhaFeita.pop(); // Remove a última ação feita
            this.pilhaDesfeita.push(ultimaAcao); // Adiciona a ação à pilha de ações desfeitas
            this.texto = this.texto.slice(0, -1); // Remove o último caractere do texto
        }
    }
    refazer() {
        if (this.pilhaDesfeita.length > 0) {
            const ultimaAcaoDesfeita = this.pilhaDesfeita.pop(); // Remove a última ação desfeita
            this.pilhaFeita.push(ultimaAcaoDesfeita); // Adiciona a ação de volta à pilha de ações feitas
            this.texto += ultimaAcaoDesfeita; // Adiciona o caractere de volta ao texto
        }
    }
    mostrarTexto() {
        console.log(this.texto); // Exibe o texto atual do editor
    }


}
module.exports = Editor;