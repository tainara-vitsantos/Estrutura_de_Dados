/* Um mago precisa viajar por reinos para encontrar o pergaminho sagrado no 
Reino Z. O grafo representa portais mágicos com o custo de energia (peso) para 
usá
•
•
Portais mágicos:
X 
→
X 
Y (6)
→
W 
W (2)
Y 
→
→
Y (2)
W 
Z (3)
→
Z (7)
Objetivos:
Mostre a matriz de adjacência.
Calcule o caminho com menor custo de energia de X até Z.
Compare os caminhos encontrados em DFS e BFS a partir de X. */

/* Um mago precisa viajar por reinos para encontrar
o pergaminho sagrado no Reino Z.

Objetivos:
- Mostrar matriz de adjacência
- Calcular menor custo de energia de X até Z
- Comparar DFS e BFS a partir de X
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

        for (
            let origem
            of vertices
        ) {

            const linha =
                vertices.map(
                    destino => {

                        const conexao =
                            this.listaAdjacencia[
                                origem
                            ]
                            .find(
                                v =>
                                v.vertice
                                === destino
                            );

                        return conexao
                            ? conexao.peso
                            : 0;
                    }
                );

            console.log(
                `${origem} ${linha.join(" ")}`
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

grafo.adicionarVertice("X");
grafo.adicionarVertice("Y");
grafo.adicionarVertice("W");
grafo.adicionarVertice("Z");

// Portais

grafo.adicionarAresta(
    "X",
    "Y",
    6
);

grafo.adicionarAresta(
    "X",
    "W",
    2
);

grafo.adicionarAresta(
    "Y",
    "W",
    2
);

grafo.adicionarAresta(
    "Y",
    "Z",
    7
);

grafo.adicionarAresta(
    "W",
    "Z",
    3
);

// Resultados

grafo.imprimirListaAdjacencia();

grafo.imprimirMatrizAdjacencia();

console.log(
"\nDFS a partir de X:"
);

grafo.dfs("X");

console.log(
"\nBFS a partir de X:"
);

grafo.bfs("X");

console.log(
"\nMenor custo de energia de X até Z:",
grafo.dijkstra(
"X",
"Z"
)
);


    