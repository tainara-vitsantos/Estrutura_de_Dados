/* # Modelagem de Grafos e Infraestrutura

## a) Matriz de Adjacência do Grafo Ponderado Direcionado

Considerando a ordem dos vértices:

1. São Paulo (SP)
2. Rio de Janeiro (RJ)
3. Belo Horizonte (BH)
4. Salvador (SSA)

E as arestas:

* São Paulo → Rio de Janeiro (15)
* São Paulo → Belo Horizonte (22)
* Rio de Janeiro → Belo Horizonte (5)
* Belo Horizonte → Salvador (40)

A matriz de adjacência ponderada é:

| Origem/Destino | SP | RJ | BH | SSA |
| -------------- | -- | -- | -- | --- |
| SP             | 0  | 15 | 22 | ∞   |
| RJ             | ∞  | 0  | 5  | ∞   |
| BH             | ∞  | ∞  | 0  | 40  |
| SSA            | ∞  | ∞  | ∞  | 0   |

Onde:

* 0 representa a distância de um vértice para ele mesmo.
* ∞ representa a ausência de conexão direta entre os vértices.

---

## b) Implementação em JavaScript usando Lista de Adjacência */


class GrafoPonderado {
    constructor() {
        // Estrutura que armazenará a lista de adjacência
        this.listaAdjacencia = new Map();
    }

    // Adiciona um vértice ao grafo
    adicionarVertice(vertice) {
        if (!this.listaAdjacencia.has(vertice)) {
            this.listaAdjacencia.set(vertice, []);
        }
    }

    // Método solicitado no exercício
    adicionarArestaPonderada(origem, destino, peso) {

        // Garante que os vértices existam
        if (!this.listaAdjacencia.has(origem)) {
            this.adicionarVertice(origem);
        }

        if (!this.listaAdjacencia.has(destino)) {
            this.adicionarVertice(destino);
        }

        // Adiciona a aresta direcionada com seu peso
        this.listaAdjacencia.get(origem).push({
            vertice: destino,
            peso: peso
        });
    }

    // Exibe a lista de adjacência
    exibirGrafo() {
        for (let [vertice, vizinhos] of this.listaAdjacencia) {
            console.log(`${vertice} ->`, vizinhos);
        }
    }
}

// Teste do programa
const grafo = new GrafoPonderado();

grafo.adicionarArestaPonderada("São Paulo", "Rio de Janeiro", 15);
grafo.adicionarArestaPonderada("São Paulo", "Belo Horizonte", 22);
grafo.adicionarArestaPonderada("Rio de Janeiro", "Belo Horizonte", 5);
grafo.adicionarArestaPonderada("Belo Horizonte", "Salvador", 40);

// Exibir resultado
grafo.exibirGrafo();

/* Saída Esperada

text
São Paulo -> [
  { vertice: 'Rio de Janeiro', peso: 15 },
  { vertice: 'Belo Horizonte', peso: 22 }
]

Rio de Janeiro -> [
  { vertice: 'Belo Horizonte', peso: 5 }
]

Belo Horizonte -> [
  { vertice: 'Salvador', peso: 40 }
]

Salvador -> []
### Conclusão

A matriz de adjacência representa o grafo de forma tabular, enquanto a lista de adjacência armazena apenas as conexões existentes, tornando-se mais eficiente em memória para grafos esparsos.
 */