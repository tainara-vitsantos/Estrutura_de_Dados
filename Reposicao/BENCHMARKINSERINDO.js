const { performance } = require('perf_hooks');

// ======================================================
// IMPORTAÇÃO DAS ESTRUTURAS
// ======================================================

const MeuArray = require('./Array');
const Pilha = require('./Pilha');
const Fila = require('./Fila');
const LinkedList = require('./ListaEncadeada');
const DoublyLinkedList = require('./ListaDuplamente');
const BinaryTree = require('./ArvoreBinaria');
const AVLTree = require('./ArvoreAvl');

// ======================================================
// CONFIGURAÇÕES
// ======================================================


const SIZE = 10000000;

const RODADAS = 10;

const NOME_ALUNO = "Tainara Vitória dos Santos";

// ======================================================
// FUNÇÃO RANDOM
// ======================================================

function getRandomIntRange(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;
}

// ======================================================
// RESULTADOS
// ======================================================

const resultadosInsercao = {};
const resultadosBusca = {};

// ======================================================
// ESTRUTURAS
// ======================================================

const estruturas = [

    { nome: 'Array', classe: MeuArray },

    { nome: 'Pilha', classe: Pilha },

    { nome: 'Fila', classe: Fila },

    { nome: 'Lista Encadeada', classe: LinkedList },

    { nome: 'Lista Duplamente Encadeada', classe: DoublyLinkedList },

    { nome: 'Árvore Binária', classe: BinaryTree },

    { nome: 'Árvore AVL', classe: AVLTree }
];

// ======================================================
// INÍCIO
// ======================================================

console.log("================================================");
console.log("INICIANDO BENCHMARK");
console.log("================================================");

// ======================================================
// LOOP PRINCIPAL
// ======================================================

estruturas.forEach(est => {

    console.log("\n================================================");
    console.log(`TESTANDO: ${est.nome}`);
    console.log("================================================");

    resultadosInsercao[est.nome] = [];
    resultadosBusca[est.nome] = [];

    // ======================================================
    // TESTA QUAIS MÉTODOS EXISTEM
    // ======================================================

    const instanciaTeste = new est.classe();

    let metodoInsercao = null;

    // ARRAY
    if (typeof instanciaTeste.adicionar === 'function') {
        metodoInsercao = 'adicionar';
    }

    // FILA
    else if (typeof instanciaTeste.enqueue === 'function') {
        metodoInsercao = 'enqueue';
    }

    // LISTA ENCADEADA
    else if (typeof instanciaTeste.insertAtEnd === 'function') {
        metodoInsercao = 'insertAtEnd';
    }

    // LISTA DUPLAMENTE
    else if (typeof instanciaTeste.append === 'function') {
        metodoInsercao = 'append';
    }

    // ÁRVORES
    else if (typeof instanciaTeste.insert === 'function') {
        metodoInsercao = 'insert';
    }

    // OUTROS
    else if (typeof instanciaTeste.inserir === 'function') {
        metodoInsercao = 'inserir';
    }

    else if (typeof instanciaTeste.push === 'function') {
        metodoInsercao = 'push';
    }

    // ======================================================
    // MÉTODO DE BUSCA
    // ======================================================

    let metodoBusca = null;

    if (typeof instanciaTeste.buscar === 'function') {
        metodoBusca = 'buscar';
    }

    else if (typeof instanciaTeste.find === 'function') {
        metodoBusca = 'find';
    }

    else if (typeof instanciaTeste.indexOf === 'function') {
        metodoBusca = 'indexOf';
    }

    else if (typeof instanciaTeste.pesquisar === 'function') {
        metodoBusca = 'pesquisar';
    }

    else if (typeof instanciaTeste.contem === 'function') {
        metodoBusca = 'contem';
    }

    // ======================================================
    // VALIDAÇÃO
    // ======================================================

    if (!metodoInsercao) {

        console.log(
            `ERRO: Método de inserção não encontrado para ${est.nome}`
        );

        return;
    }

    // ======================================================
    // RODADAS
    // ======================================================

    for (let r = 1; r <= RODADAS; r++) {

        console.log(`\nRodada ${r}`);

        const instancia = new est.classe();

        // ======================================================
        // INSERÇÃO
        // ======================================================

        const t0_ins = performance.now();

        for (let i = 0; i < SIZE; i++) {

            const valor = (i === SIZE - 1)
                ? NOME_ALUNO
                : getRandomIntRange(0, SIZE);

            instancia[metodoInsercao](valor);
        }

        const t1_ins = performance.now();

        const tempoInsercao = Number(
            (t1_ins - t0_ins).toFixed(3)
        );

        resultadosInsercao[est.nome]
            .push(tempoInsercao);

        console.log(
            `Inserção: ${tempoInsercao} ms`
        );

        // ======================================================
        // BUSCA
        // ======================================================

        const t0_bus = performance.now();

        // estruturas que possuem busca
        if (metodoBusca) {

            instancia[metodoBusca](NOME_ALUNO);
        }

        // busca manual em fila/pilha/array
        else if (
            est.nome === 'Fila' ||
            est.nome === 'Pilha' ||
            est.nome === 'Array'
        ) {

            const chaves = Object
                .getOwnPropertyNames(instancia);

            for (let chave of chaves) {

                const estruturaInterna =
                    instancia[chave];

                if (
                    Array.isArray(estruturaInterna)
                ) {

                    estruturaInterna.includes(
                        NOME_ALUNO
                    );
                }
            }
        }

        // busca manual em árvores
        else if (
            est.nome === 'Árvore Binária' ||
            est.nome === 'Árvore AVL'
        ) {

            function percorrerArvore(no) {

                if (!no) {
                    return false;
                }

                if (
                    no.value === NOME_ALUNO
                ) {
                    return true;
                }

                return (
                    percorrerArvore(no.left) ||
                    percorrerArvore(no.right)
                );
            }

            percorrerArvore(instancia.root);
        }

        const t1_bus = performance.now();

        const tempoBusca = Number(
            (t1_bus - t0_bus).toFixed(3)
        );

        resultadosBusca[est.nome]
            .push(tempoBusca);

        console.log(
            `Busca: ${tempoBusca} ms`
        );
    }
});

// ======================================================
// GERADOR DE TABELA
// ======================================================

function gerarTabelaFinal(dados) {

    const tabela = {};

    for (const [estrutura, tempos]
        of Object.entries(dados)) {

        if (tempos.length === 0) {
            continue;
        }

        tabela[estrutura] = {};

        let soma = 0;

        tempos.forEach((tempo, index) => {

            tabela[estrutura][`T${index + 1}`]
                = `${tempo} ms`;

            soma += tempo;
        });

        const media = (
            soma / tempos.length
        ).toFixed(3);

        tabela[estrutura]['Média']
            = `${media} ms`;
    }

    return tabela;
}

// ======================================================
// RESULTADOS FINAIS
// ======================================================

console.log("\n================================================");

console.log(
    "BENCHMARK INSERINDO DADOS EM CADA ESTRUTURA"
);

console.log("================================================");

console.table(
    gerarTabelaFinal(resultadosInsercao)
);

console.log("\n================================================");

console.log(
    "BENCHMARK BUSCANDO DADO ESPECÍFICO"
);

console.log("================================================");

console.table(
    gerarTabelaFinal(resultadosBusca)
);