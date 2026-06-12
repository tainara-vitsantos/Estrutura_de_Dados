/* Um personagem está em um labirinto com túneis de diferentes dificuldades 
(pesos). Ele precisa encontrar o caminho mais fácil até a saída.
•
Túneis do labirinto:
Entrada 
A 
→
→
B (2)
A (2)
B 
→
Saída (1)
Entrada 
C 
→
→
C (5)
•
Saída (1)
Tarefas:
Modele esse labirinto como um grafo.
Use 
dijkstra
('Entrada') para descobrir a melhor rota até 'Saída'.
Compare com os caminhos encontrados por DFS e BFS. */

/* Um personagem está em um labirinto com túneis de diferentes dificuldades.

Objetivos:
- Modelar como grafo
- Usar Dijkstra para descobrir a melhor rota
- Comparar DFS e BFS
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
        origem,
        destino
    ) {

        const distancias =
            {};

        const fila =
            [];

        for (
            let v
            in this.listaAdjacencia
        ) {

            distancias[v] =
                Infinity;
        }

        distancias[
            origem
        ] = 0;

        fila.push({
            vertice:
                origem,

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

                const nova =
                    distancias[
                        atual.vertice
                    ]
                    +
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

                    fila.push({
                        vertice:
                            vizinho.vertice,

                        distancia:
                            nova
                    });
                }
            }
        }

        return distancias[
            destino
        ];
    }
}

// Criando o grafo

const grafo =
    new Grafo();

grafo.adicionarVertice("Entrada");
grafo.adicionarVertice("A");
grafo.adicionarVertice("B");
grafo.adicionarVertice("C");
grafo.adicionarVertice("Saída");

// Túneis

grafo.adicionarAresta(
    "Entrada",
    "A",
    2
);

grafo.adicionarAresta(
    "A",
    "B",
    2
);

grafo.adicionarAresta(
    "B",
    "Saída",
    1
);

grafo.adicionarAresta(
    "Entrada",
    "C",
    5
);

grafo.adicionarAresta(
    "C",
    "Saída",
    1
);

// Resultados

grafo.imprimirListaAdjacencia();

console.log(
"\nDFS:"
);

grafo.dfs(
"Entrada"
);

console.log(
"\nBFS:"
);

grafo.bfs(
"Entrada"
);

console.log(
"\nMenor rota:"
);

console.log(
grafo.dijkstra(
"Entrada",
"Saída"
)
);