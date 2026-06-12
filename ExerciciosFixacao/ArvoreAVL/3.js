/* Dado o seguinte código:
const avl = new AVLTree();
[50, 20, 60, 10, 30, 25, 27].forEach(v => avl.insert(v));
– Desenhe a árvore após cada inserção.
– Identifique os nós desbalanceados.
– Indique as rotações feitas (nome, tipo e onde).
– Mostre o percurso in-order da árvore final.
• Objetivo: consolidar o uso de rotações simples e duplas em sequência. */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    getHeight(node) {
        return node ? node.height : 0;
    }

    getBalance(node) {
        return node
            ? this.getHeight(node.left) - this.getHeight(node.right)
            : 0;
    }

    rotateRight(y) {
        console.log(`➡ Rotação Simples à Direita (LL) no nó ${y.value}`);

        const x = y.left;
        const t2 = x.right;

        x.right = y;
        y.left = t2;

        y.height = Math.max(
            this.getHeight(y.left),
            this.getHeight(y.right)
        ) + 1;

        x.height = Math.max(
            this.getHeight(x.left),
            this.getHeight(x.right)
        ) + 1;

        return x;
    }

    rotateLeft(x) {
        console.log(`➡ Rotação Simples à Esquerda (RR) no nó ${x.value}`);

        const y = x.right;
        const t2 = y.left;

        y.left = x;
        x.right = t2;

        x.height = Math.max(
            this.getHeight(x.left),
            this.getHeight(x.right)
        ) + 1;

        y.height = Math.max(
            this.getHeight(y.left),
            this.getHeight(y.right)
        ) + 1;

        return y;
    }

    insert(value) {
        this.root = this._insert(this.root, value);
    }

    _insert(node, value) {
        if (!node) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this._insert(node.left, value);
        } else if (value > node.value) {
            node.right = this._insert(node.right, value);
        } else {
            return node;
        }

        node.height =
            1 +
            Math.max(
                this.getHeight(node.left),
                this.getHeight(node.right)
            );

        const balance = this.getBalance(node);

        // Identifica desbalanceamento
        if (balance > 1 || balance < -1) {
            console.log(
                `⚠ Nó desbalanceado: ${node.value} (FB = ${balance})`
            );
        }

        // Caso LL
        if (balance > 1 && value < node.left.value) {
            return this.rotateRight(node);
        }

        // Caso RR
        if (balance < -1 && value > node.right.value) {
            return this.rotateLeft(node);
        }

        // Caso LR
        if (balance > 1 && value > node.left.value) {
            console.log(
                `➡ Rotação Dupla LR no nó ${node.value}`
            );

            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // Caso RL
        if (balance < -1 && value < node.right.value) {
            console.log(
                `➡ Rotação Dupla RL no nó ${node.value}`
            );

            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }

    printBalances(node) {
        if (node) {
            this.printBalances(node.left);

            console.log(
                `Nó ${node.value} -> FB = ${this.getBalance(node)}`
            );

            this.printBalances(node.right);
        }
    }

    drawTree(node, level = 0) {
        if (node === null) return;

        this.drawTree(node.right, level + 1);

        console.log("    ".repeat(level) + node.value);

        this.drawTree(node.left, level + 1);
    }

    inOrder(node, result = []) {
        if (node) {
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }
        return result;
    }
}

// ==========================
// EXERCÍCIO
// ==========================

const avl = new AVLTree();
const valores = [50, 20, 60, 10, 30, 25, 27];

console.log("==================================");
console.log("INSERÇÃO EM ÁRVORE AVL");
console.log("==================================");

valores.forEach(valor => {

    console.log(`\n\nInserindo ${valor}`);
    console.log("----------------------------------");

    avl.insert(valor);

    console.log("\nÁrvore após a inserção:");

    avl.drawTree(avl.root);

    console.log("\nFatores de Balanceamento:");

    avl.printBalances(avl.root);

    console.log("----------------------------------");
});

console.log("\n\n==================================");
console.log("ÁRVORE FINAL");
console.log("==================================");

avl.drawTree(avl.root);

console.log("\nPercurso In-Order:");

const percurso = avl.inOrder(avl.root);

console.log(percurso.join(" -> "));

console.log("\nVetor In-Order:");
console.log(percurso);