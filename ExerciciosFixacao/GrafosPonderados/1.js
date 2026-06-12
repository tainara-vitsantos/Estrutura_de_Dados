/* Cidade dos Gnomos
- Imprimir lista de adjacência
- Imprimir matriz de adjacência
- Executar DFS e BFS a partir da Casa A
- Executar Dijkstra para encontrar o menor caminho até E
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

    imprimirListaAdjacencia() {

        console.log("Lista de Adjacência:");

        for (let vertice in this.listaAdjacencia) {

            const conexoes =
                this.listaAdjacencia[vertice]
                    .map(
                        v =>
                        `${v.vertice}(${v.peso})`
                    )
                    .join(" -> ");

            console.log(
                `${vertice}: ${conexoes}`
            );
        }
    }

    imprimirMatrizAdjacencia() {

        const vertices =
            Object.keys(
                this.listaAdjacencia
            );

        console.log(
            "\nMatriz de Adjacência:"
        );

        console.log(
            "   " +
            vertices.join(" ")
        );

        vertices.forEach(
            origem => {

                let linha =
                    vertices.map(
                        destino => {

                            const aresta =
                                this.listaAdjacencia[
                                    origem
                                ]
                                .find(
                                    v =>
                                    v.vertice
                                    === destino
                                );

                            return aresta
                                ? aresta.peso
                                : 0;
                        }
                    );

                console.log(
                    origem +
                    " " +
                    linha.join(" ")
                );
            }
        );
    }

    buscaEmProfundidade(
        inicio,
        visitados =
            new Set(),
        resultado = []
    ) {

        visitados.add(
            inicio
        );

        resultado.push(
            inicio
        );

        for (
            const vizinho
            of
            this.listaAdjacencia[
                inicio
            ]
        ) {

            if (
                !visitados.has(
                    vizinho.vertice
                )
            ) {

                this.buscaEmProfundidade(
                    vizinho.vertice,
                    visitados,
                    resultado
                );
            }
        }

        return resultado;
    }

    buscaEmLargura(
        inicio
    ) {

        const fila =
            [inicio];

        const visitados =
            new Set();

        const resultado =
            [];

        while (
            fila.length
        ) {

            const atual =
                fila.shift();

            if (
                !visitados.has(
                    atual
                )
            ) {

                visitados.add(
                    atual
                );

                resultado.push(
                    atual
                );

                for (
                    const vizinho
                    of
                    this.listaAdjacencia[
                        atual
                    ]
                ) {

                    fila.push(
                        vizinho.vertice
                    );
                }
            }
        }

        return resultado;
    }

    dijkstra(
        inicio,
        fim
    ) {

        const distancias =
            {};

        const fila =
            [];

        for (
            let v
            in
            this.listaAdjacencia
        ) {
            distancias[v] =
                Infinity;
        }

        distancias[
            inicio
        ] = 0;

        fila.push(
            {
                vertice:
                    inicio,
                distancia:
                    0
            }
        );

        while (
            fila.length
        ) {

            fila.sort(
                (
                    a,
                    b
                ) =>
                    a.distancia -
                    b.distancia
            );

            const atual =
                fila.shift();

            for (
                const vizinho
                of
                this.listaAdjacencia[
                    atual.vertice
                ]
            ) {

                const nova =
                    distancias[
                        atual.vertice
                    ] +
                    vizinho.peso;

                if (
                    nova <
                    distancias[
                        vizinho.vertice
                    ]
                ) {

                    distancias[
                        vizinho.vertice
                    ] =
                        nova;

                    fila.push(
                        {
                            vertice:
                                vizinho.vertice,
                            distancia:
                                nova
                        }
                    );
                }
            }
        }

        return distancias[
            fim
        ];
    }
}

// Criando o grafo
const grafo =
    new GrafoPonderado();

["A","B","C","D","E"]
.forEach(
    v =>
    grafo
    .adicionarVertice(
        v
    )
);

// Ruas mágicas
grafo.adicionarAresta(
    "A",
    "B",
    3
);

grafo.adicionarAresta(
    "B",
    "C",
    2
);

grafo.adicionarAresta(
    "C",
    "D",
    4
);

grafo.adicionarAresta(
    "D",
    "E",
    1
);

grafo.adicionarAresta(
    "A",
    "E",
    5
);

// Resultados
grafo.imprimirListaAdjacencia();

grafo.imprimirMatrizAdjacencia();

console.log(
"\nDFS:",
grafo.buscaEmProfundidade("A")
);

console.log(
"\nBFS:",
grafo.buscaEmLargura("A")
);

console.log(
"\nMenor caminho A → E:",
grafo.dijkstra(
"A",
"E"
)
);