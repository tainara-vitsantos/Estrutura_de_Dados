/* Rede Ferroviária

Um trem precisa cruzar uma rede ferroviária entre cidades.

Descobrir:
- Menor distância de São Paulo até Porto Alegre
- DFS a partir de São Paulo
- BFS a partir de São Paulo
*/

class Grafo {

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

        console.log(
            "Lista de Adjacência:"
        );

        for (
            let vertice
            in this.listaAdjacencia
        ) {

            const conexoes =
                this.listaAdjacencia[
                    vertice
                ]
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

    dfs(
        vertice,
        visitados =
            new Set()
    ) {

        visitados.add(
            vertice
        );

        console.log(
            vertice
        );

        for (
            let vizinho
            of
            this.listaAdjacencia[
                vertice
            ]
        ) {

            if (
                !visitados.has(
                    vizinho.vertice
                )
            ) {

                this.dfs(
                    vizinho.vertice,
                    visitados
                );
            }
        }
    }

    bfs(
        vertice
    ) {

        const fila =
            [vertice];

        const visitados =
            new Set();

        visitados.add(
            vertice
        );

        while (
            fila.length
        ) {

            const atual =
                fila.shift();

            console.log(
                atual
            );

            for (
                let vizinho
                of
                this.listaAdjacencia[
                    atual
                ]
            ) {

                if (
                    !visitados.has(
                        vizinho.vertice
                    )
                ) {

                    visitados.add(
                        vizinho.vertice
                    );

                    fila.push(
                        vizinho.vertice
                    );
                }
            }
        }
    }

    dijkstra(
        inicio
    ) {

        const distancias =
            {};

        const fila =
            [];

        for (
            let vertice
            in this.listaAdjacencia
        ) {

            distancias[
                vertice
            ] =
                Infinity;
        }

        distancias[
            inicio
        ] = 0;

        fila.push({
            vertice:
                inicio,
            distancia:
                0
        });

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
                let vizinho
                of
                this.listaAdjacencia[
                    atual.vertice
                ]
            ) {

                const novaDistancia =
                    distancias[
                        atual.vertice
                    ]
                    +
                    vizinho.peso;

                if (
                    novaDistancia <
                    distancias[
                        vizinho.vertice
                    ]
                ) {

                    distancias[
                        vizinho.vertice
                    ] =
                        novaDistancia;

                    fila.push({
                        vertice:
                            vizinho.vertice,

                        distancia:
                            novaDistancia
                    });
                }
            }
        }

        return distancias;
    }

    menorDistancia(
        inicio,
        destino
    ) {

        const distancias =
            this.dijkstra(
                inicio
            );

        return distancias[
            destino
        ];
    }
}

// Criando o grafo

const grafo =
    new Grafo();

grafo.adicionarVertice(
    "São Paulo"
);

grafo.adicionarVertice(
    "Campinas"
);

grafo.adicionarVertice(
    "Curitiba"
);

grafo.adicionarVertice(
    "Florianópolis"
);

grafo.adicionarVertice(
    "Porto Alegre"
);

// Conexões ferroviárias

grafo.adicionarAresta(
    "São Paulo",
    "Campinas",
    1
);

grafo.adicionarAresta(
    "São Paulo",
    "Curitiba",
    4
);

grafo.adicionarAresta(
    "Campinas",
    "Curitiba",
    2
);

grafo.adicionarAresta(
    "Curitiba",
    "Florianópolis",
    3
);

grafo.adicionarAresta(
    "Florianópolis",
    "Porto Alegre",
    2
);

// Resultados

grafo.imprimirListaAdjacencia();

console.log(
"\nDFS a partir de São Paulo:"
);

grafo.dfs(
"São Paulo"
);

console.log(
"\nBFS a partir de São Paulo:"
);

grafo.bfs(
"São Paulo"
);

console.log(
"\nMenor distância de São Paulo até Porto Alegre:",
grafo.menorDistancia(
"São Paulo",
"Porto Alegre"
)
);

