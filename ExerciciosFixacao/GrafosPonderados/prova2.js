/* # Algoritmos de Roteamento em Grafos – Algoritmo de Dijkstra

## Grafo

* A → B (2)
* A → C (4)
* B → C (1)
* B → D (7)
* C → D (3)
* C → E (8)
* D → E (2)

---

## a) Execução Passo a Passo do Algoritmo de Dijkstra

### Estado Inicial

| Vértice | Distância | Predecessor |
| ------- | --------- | ----------- |
| A       | 0         | -           |
| B       | ∞         | -           |
| C       | ∞         | -           |
| D       | ∞         | -           |
| E       | ∞         | -           |

Vértice inicial: **A**

---

### Passo 1 – Processando A

Arestas saindo de A:

* A → B = 2
* A → C = 4

Atualizações:

| Vértice | Distância      | Predecessor |
| ------- | -------------- | ----------- |
| A       | 0 (Definitiva) | -           |
| B       | 2              | A           |
| C       | 4              | A           |
| D       | ∞              | -           |
| E       | ∞              | -           |

Próximo vértice: **B** (menor distância = 2)

---

### Passo 2 – Processando B

Arestas saindo de B:

* B → C = 1
* B → D = 7

Cálculos:

* Para C: 2 + 1 = 3 < 4 → Atualiza
* Para D: 2 + 7 = 9

Tabela:

| Vértice | Distância      | Predecessor |
| ------- | -------------- | ----------- |
| A       | 0 (Definitiva) | -           |
| B       | 2 (Definitiva) | A           |
| C       | 3              | B           |
| D       | 9              | B           |
| E       | ∞              | -           |

Próximo vértice: **C** (menor distância = 3)

---

### Passo 3 – Processando C

Arestas saindo de C:

* C → D = 3
* C → E = 8

Cálculos:

* Para D: 3 + 3 = 6 < 9 → Atualiza
* Para E: 3 + 8 = 11

Tabela:

| Vértice | Distância      | Predecessor |
| ------- | -------------- | ----------- |
| A       | 0 (Definitiva) | -           |
| B       | 2 (Definitiva) | A           |
| C       | 3 (Definitiva) | B           |
| D       | 6              | C           |
| E       | 11             | C           |

Próximo vértice: **D** (menor distância = 6)

---

### Passo 4 – Processando D

Aresta saindo de D:

* D → E = 2

Cálculo:

* Para E: 6 + 2 = 8 < 11 → Atualiza

Tabela:

| Vértice | Distância      | Predecessor |
| ------- | -------------- | ----------- |
| A       | 0 (Definitiva) | -           |
| B       | 2 (Definitiva) | A           |
| C       | 3 (Definitiva) | B           |
| D       | 6 (Definitiva) | C           |
| E       | 8              | D           |

Próximo vértice: **E**

---

### Passo 5 – Processando E

Não existem arestas saindo de E.

Tabela Final:

| Vértice | Distância Mínima | Predecessor |
| ------- | ---------------- | ----------- |
| A       | 0                | -           |
| B       | 2                | A           |
| C       | 3                | B           |
| D       | 6                | C           |
| E       | 8                | D           |

---

## b) Menor Caminho Encontrado

Reconstruindo a rota através dos predecessores:

* E ← D
* D ← C
* C ← B
* B ← A

Invertendo a sequência:

### Caminho mínimo

A → B → C → D → E

### Custo total

* A → B = 2
* B → C = 1
* C → D = 3
* D → E = 2

**Tempo Total = 2 + 1 + 3 + 2 = 8 minutos**

## Resposta Final

**Rota ideal:** A → B → C → D → E

**Custo mínimo:** 8 minutos
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
        this.adicionarVertice(origem);
        this.adicionarVertice(destino);

        this.listaAdjacencia[origem].push({
            vertice: destino,
            peso: peso
        });
    }

    dijkstra(inicio) {
        const distancias = {};
        const predecessores = {};
        const visitados = new Set();

        // Inicialização
        for (let vertice in this.listaAdjacencia) {
            distancias[vertice] = Infinity;
            predecessores[vertice] = null;
        }

        distancias[inicio] = 0;

        while (visitados.size < Object.keys(this.listaAdjacencia).length) {

            // Encontrar vértice não visitado com menor distância
            let atual = null;
            let menorDistancia = Infinity;

            for (let vertice in distancias) {
                if (
                    !visitados.has(vertice) &&
                    distancias[vertice] < menorDistancia
                ) {
                    menorDistancia = distancias[vertice];
                    atual = vertice;
                }
            }

            if (atual === null) break;

            visitados.add(atual);

            // Relaxamento das arestas
            for (let vizinho of this.listaAdjacencia[atual]) {
                let novaDistancia =
                    distancias[atual] + vizinho.peso;

                if (novaDistancia < distancias[vizinho.vertice]) {
                    distancias[vizinho.vertice] = novaDistancia;
                    predecessores[vizinho.vertice] = atual;
                }
            }
        }

        return {
            distancias,
            predecessores
        };
    }

    reconstruirCaminho(predecessores, destino) {
        const caminho = [];

        while (destino !== null) {
            caminho.unshift(destino);
            destino = predecessores[destino];
        }

        return caminho;
    }
}

// Criação do grafo
const grafo = new Grafo();

grafo.adicionarAresta("A", "B", 2);
grafo.adicionarAresta("A", "C", 4);
grafo.adicionarAresta("B", "C", 1);
grafo.adicionarAresta("B", "D", 7);
grafo.adicionarAresta("C", "D", 3);
grafo.adicionarAresta("C", "E", 8);
grafo.adicionarAresta("D", "E", 2);

// Executa Dijkstra a partir de A
const resultado = grafo.dijkstra("A");

// Recupera o caminho até E
const caminho = grafo.reconstruirCaminho(
    resultado.predecessores,
    "E"
);

console.log("Distâncias:", resultado.distancias);
console.log("Predecessores:", resultado.predecessores);
console.log("Menor caminho:", caminho.join(" -> "));
console.log("Custo total:", resultado.distancias["E"]);