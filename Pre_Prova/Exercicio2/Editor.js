class Editor {
    constructor() {
        this.texto = "";
        this.pilhaAcoes = [];      // ações feitas
        this.pilhaDesfeitas = [];  // ações desfeitas
    }

    // Digitar
    digitar(letra) {
        this.texto += letra;

        // salva ação
        this.pilhaAcoes.push(letra);

        // limpa refazer
        this.pilhaDesfeitas = [];

        console.log("Digitou:", letra, "| Texto:", this.texto);
    }

    //  Desfazer
    desfazer() {
        if (this.pilhaAcoes.length === 0) {
            console.log("Nada para desfazer.");
            return;
        }

        const ultimaAcao = this.pilhaAcoes.pop();

        // guarda para refazer
        this.pilhaDesfeitas.push(ultimaAcao);

        // remove do texto
        this.texto = this.texto.slice(0, -1);

        console.log("Desfez:", ultimaAcao, "| Texto:", this.texto);
    }

    //  Refazer
    refazer() {
        if (this.pilhaDesfeitas.length === 0) {
            console.log("Nada para refazer.");
            return;
        }

        const acao = this.pilhaDesfeitas.pop();

        // reaplica ação
        this.texto += acao;

        this.pilhaAcoes.push(acao);

        console.log("Refez:", acao, "| Texto:", this.texto);
    }

    // Mostrar texto atual
    mostrar() {
        console.log("Texto atual:", this.texto);
    }
}

module.exports = Editor;