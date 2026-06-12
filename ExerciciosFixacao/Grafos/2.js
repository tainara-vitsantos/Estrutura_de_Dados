/* 2)
Adicione pesos às arestas no grafo.
Implemente o algoritmo de busca em largura (BFS).
Crie um grafo ponderado e calcule o menor caminho
entre dois vértices.
*/

class GrafoPonderado {
    constructor() {
        this.listaAdjacencia = {};
    }

    adicionarVertice(vertice) {
        if (!this.listaAdjacencia[vertice]) {
            this.listaAdjacencia[vertice] = [];
        }
    }

    adicionarAresta(origem, destino, peso) {
        this.listaAdjacencia[origem].push({
            vertice: destino,
            peso
        });

        this.listaAdjacencia[destino].push({
            vertice: origem,
            peso
        });
    }

    imprimirGrafo() {
        for (let vertice in this.listaAdjacencia) {

            let conexoes =
                this.listaAdjacencia[vertice]
                    .map(
                        v => `${v.vertice}(peso ${v.peso})`
                    )
                    .join(" -> ");

            console.log(`${vertice}: ${conexoes}`);
        }
    }

    buscaEmLargura(inicio) {

        const visitados = new Set();

        const fila = [inicio];

        const resultado = [];

        while (fila.length > 0) {

            const vertice = fila.shift();

            if (!visitados.has(vertice)) {

                visitados.add(vertice);

                resultado.push(vertice);

                for (
                    const vizinho
                    of this.listaAdjacencia[vertice]
                ) {
                    fila.push(vizinho.vertice);
                }
            }
        }

        return resultado;
    }

    menorCaminho(inicio, fim) {

        const distancias = {};

        const visitados = new Set();

        const fila = new FilaPrioridade();

        for (let v in this.listaAdjacencia) {
            distancias[v] = Infinity;
        }

        distancias[inicio] = 0;

        fila.enfileirar(inicio, 0);

        while (!fila.estaVazia()) {

            const vertice =
                fila.desenfileirar();

            if (
                visitados.has(vertice)
            ) continue;

            visitados.add(vertice);

            for (
                const vizinho
                of this.listaAdjacencia[vertice]
            ) {

                const distancia =
                    distancias[vertice]
                    + vizinho.peso;

                if (
                    distancia <
                    distancias[vizinho.vertice]
                ) {

                    distancias[
                        vizinho.vertice
                    ] = distancia;

                    fila.enfileirar(
                        vizinho.vertice,
                        distancia
                    );
                }
            }
        }

        return distancias[fim];
    }
}

class FilaPrioridade {

    constructor() {
        this.itens = [];
    }

    enfileirar(
        elemento,
        prioridade
    ) {

        this.itens.push({
            elemento,
            prioridade
        });

        this.itens.sort(
            (
                a,
                b
            ) =>
                a.prioridade -
                b.prioridade
        );
    }

    desenfileirar() {
        return this.itens.shift()
            .elemento;
    }

    estaVazia() {
        return this.itens.length === 0;
    }
}

// Criando grafo
const grafo =
    new GrafoPonderado();

grafo.adicionarVertice(1);
grafo.adicionarVertice(2);
grafo.adicionarVertice(3);
grafo.adicionarVertice(4);

grafo.adicionarAresta(1,2,5);
grafo.adicionarAresta(1,3,10);
grafo.adicionarAresta(2,3,2);
grafo.adicionarAresta(2,4,1);
grafo.adicionarAresta(3,4,7);

console.log("Grafo:");
grafo.imprimirGrafo();

console.log(
"\nBusca em largura:",
grafo.buscaEmLargura(1)
);

console.log(
"\nMenor caminho entre 1 e 4:",
grafo.menorCaminho(1,4)
);