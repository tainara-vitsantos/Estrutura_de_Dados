/* Insira os valores 20, 10, 30, 25, 40, 22 em ordem.
– Mostre o fator de balanceamento após cada inserção.
– Identifique e aplique as rotações necessárias.
– Desenhe a árvore final balanceada.
• Objetivo: provocar um caso esquerda-direita (LR)
e aplicar uma rotação dupla. */

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
        const x = y.left;
        const t2 = x.right;

        x.right = y;
        y.left = t2;

        y.height =
            Math.max(
                this.getHeight(y.left),
                this.getHeight(y.right)
            ) + 1;

        x.height =
            Math.max(
                this.getHeight(x.left),
                this.getHeight(x.right)
            ) + 1;

        return x;
    }

    rotateLeft(x) {
        const y = x.right;
        const t2 = y.left;

        y.left = x;
        x.right = t2;

        x.height =
            Math.max(
                this.getHeight(x.left),
                this.getHeight(x.right)
            ) + 1;

        y.height =
            Math.max(
                this.getHeight(y.left),
                this.getHeight(y.right)
            ) + 1;

        return y;
    }

    insert(node, value) {
        if (!node) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this.insert(node.left, value);
        } else if (value > node.value) {
            node.right = this.insert(node.right, value);
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

        // LL
        if (balance > 1 && value < node.left.value) {
            console.log("➡ Rotação LL (Direita)");
            return this.rotateRight(node);
        }

        // RR
        if (balance < -1 && value > node.right.value) {
            console.log("➡ Rotação RR (Esquerda)");
            return this.rotateLeft(node);
        }

        // LR
        if (balance > 1 && value > node.left.value) {
            console.log("➡ Rotação LR (Esquerda + Direita)");
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // RL
        if (balance < -1 && value < node.right.value) {
            console.log("➡ Rotação RL (Direita + Esquerda)");
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

    drawTree(node, space = 0, gap = 6) {
        if (!node) return;

        space += gap;

        this.drawTree(node.right, space);

        console.log(" ".repeat(space - gap) + node.value);

        this.drawTree(node.left, space);
    }
}

const avl = new AVLTree();

const valores = [20, 10, 30, 25, 40, 22];

console.log("========================================");
console.log("INSERÇÃO EM ÁRVORE AVL");
console.log("========================================");

valores.forEach(valor => {
    console.log(`\nInserindo ${valor}...`);

    avl.root = avl.insert(avl.root, valor);

    console.log("\nÁrvore Atual:");
    avl.drawTree(avl.root);

    console.log("\nFatores de Balanceamento:");
    avl.printBalances(avl.root);

    console.log("----------------------------------------");
});

console.log("\n========================================");
console.log("ÁRVORE FINAL BALANCEADA");
console.log("========================================");

avl.drawTree(avl.root);

console.log("\nFatores Finais:");
avl.printBalances(avl.root);

console.log(`
Conclusão:
A inserção do valor 22 provoca um desbalanceamento.
O caso identificado é RL (Direita-Esquerda).
São aplicadas duas rotações:
1. Rotação à direita.
2. Rotação à esquerda.
Resultando em uma árvore AVL balanceada.
`);