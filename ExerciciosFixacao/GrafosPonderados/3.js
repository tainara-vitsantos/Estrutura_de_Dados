/* Um entregador de sucos precisa traçar a melhor rota entre lojas para entregar os 
pedidos rapidamente. Use 
Dijkstra
sucos de Loja A até Loja F.
para descobrir o menor tempo de entrega de 
•
Rotas:
A 
→
A 
B (1)
→
B 
C (4)
→
C 
D (2)
→
D 
D (1)
→
E 
→
E (3)
•
F (2)
Desafios:
Liste os caminhos visitados em DFS e BFS a partir de A.
Qual a menor distância de A até F? */

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
        for (let vertice in this.listaAdjacencia) {
            const conexoes = this.listaAdjacencia[vertice]
                .map(v => `${v.vertice}(${v.peso})`)
                .join(" -> ");
            console.log(
                `${vertice}: ${conexoes}`
            );
        }
    }

    dfs(vertice, visitados = new Set()) {
        visitados.add(vertice);
        console.log(vertice);
        for (const vizinho of this.listaAdjacencia[vertice]) {
            if (!visitados.has(vizinho.vertice)) {
                this.dfs(vizinho.vertice, visitados);
            }
        }
    }

    bfs(vertice) {
        const visitados = new Set();
        const fila = [vertice];
        visitados.add(vertice);
        while (fila.length > 0) {
            const atual = fila.shift();
            console.log(atual);
            for (const vizinho of this.listaAdjacencia[atual]) {
                if (!visitados.has(vizinho.vertice)) {
                    visitados.add(vizinho.vertice);
                    fila.push(vizinho.vertice);
                }
            }
        }

    }

    dijkstra(origem, destino) {
        const distancias = {};
        const visitados = new Set();
        const fila = new PriorityQueue();
        for (let vertice in this.listaAdjacencia) {
            distancias[vertice] = Infinity;
        }
        distancias[origem] = 0;
        fila.enqueue(origem, 0);
        while (!fila.isEmpty()) {
            const { vertice: atual } = fila.dequeue();
            if (visitados.has(atual)) continue;
            visitados.add(atual);
            if (atual === destino) break;
            for (const vizinho of this.listaAdjacencia[atual]) {
                const novaDistancia = distancias[atual] + vizinho.peso;
                if (novaDistancia < distancias[vizinho.vertice]) {
                    distancias[vizinho.vertice] = novaDistancia;
                    fila.enqueue(vizinho.vertice, novaDistancia);
                }
            }
        }
        return distancias[destino];
    }
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }
    enqueue(vertice, prioridade) {
        this.items.push({ vertice, prioridade });
        this.items.sort((a, b) => a.prioridade - b.prioridade);
    }
    dequeue() {
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    peek() {
        return this.items[0];   

    }
}

const grafo = new Grafo();

grafo.adicionarVertice("A");
grafo.adicionarVertice("B");
grafo.adicionarVertice("C");
grafo.adicionarVertice("D");
grafo.adicionarVertice("E");
grafo.adicionarVertice("F");

grafo.adicionarAresta("A", "B", 1);
grafo.adicionarAresta("B", "C", 4);
grafo.adicionarAresta("C", "D", 2);
grafo.adicionarAresta("D", "E", 1);
grafo.adicionarAresta("E", "F", 3);
grafo.adicionarAresta("D", "F", 2);

grafo.imprimirListaAdjacencia();

console.log("DFS a partir de A:");
grafo.dfs("A");

console.log("BFS a partir de A:");
grafo.bfs("A"); 

const menorDistancia = grafo.dijkstra("A", "F");
console.log(`A menor distância de A até F é: ${menorDistancia}`);

