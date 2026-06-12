/* 1)
Crie um grafo com os vértices 1, 2, 3, 4 e as
arestas 1-2, 1-3 e 2-4.
Imprima o grafo.
Remova o vértice 2 e imprima o grafo novamente.
*/

class Grafo {
    constructor() {
        this.listaAdjacencia = {};
    }

    // Adiciona um vértice
    adicionarVertice(vertice) {
        if (!this.listaAdjacencia[vertice]) {
            this.listaAdjacencia[vertice] = [];
        }
    }

    // Adiciona uma aresta entre dois vértices
    adicionarAresta(vertice1, vertice2) {
        if (
            this.listaAdjacencia[vertice1] &&
            this.listaAdjacencia[vertice2]
        ) {
            this.listaAdjacencia[vertice1].push(vertice2);
            this.listaAdjacencia[vertice2].push(vertice1);
        }
    }

    // Remove um vértice
    removerVertice(vertice) {
        if (this.listaAdjacencia[vertice]) {

            for (let verticeVizinho of this.listaAdjacencia[vertice]) {
                this.listaAdjacencia[verticeVizinho] =
                    this.listaAdjacencia[verticeVizinho]
                        .filter(v => v !== vertice);
            }

            delete this.listaAdjacencia[vertice];
        }
    }

    // Imprime o grafo
    imprimirGrafo() {
        for (let vertice in this.listaAdjacencia) {
            console.log(
                `${vertice}: ${this.listaAdjacencia[vertice].join(", ")}`
            );
        }
    }
}

// Criando o grafo
const grafo = new Grafo();

// Adicionando vértices
grafo.adicionarVertice(1);
grafo.adicionarVertice(2);
grafo.adicionarVertice(3);
grafo.adicionarVertice(4);

// Adicionando arestas
grafo.adicionarAresta(1, 2);
grafo.adicionarAresta(1, 3);
grafo.adicionarAresta(2, 4);

// Imprimindo o grafo
console.log("Grafo antes de remover o vértice 2:");
grafo.imprimirGrafo();

// Removendo o vértice 2
grafo.removerVertice(2);

// Imprimindo novamente
console.log("\nGrafo após remover o vértice 2:");
grafo.imprimirGrafo();