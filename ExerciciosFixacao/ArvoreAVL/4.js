/* Considere a seguinte árvore AVL:
– Calcule manualmente a altura de cada nó.
– Calcule o fator de balanceamento de cada nó.
– Diga se a árvore está balanceada.
– Insira o valor 70 e verifique se será necessário
rebalancear.
– Objetivo: reforçar cálculo de altura e fator de
balanceamento, além da avaliação de
necessidade de rotação. */


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

    updateHeight(node) {
        if (node) {
            node.height =
                1 +
                Math.max(
                    this.getHeight(node.left),
                    this.getHeight(node.right)
                );
        }
    }

    rotateLeft(x) {
        console.log(`\n➡ Rotação RR (Esquerda) no nó ${x.value}`);

        const y = x.right;
        const t2 = y.left;

        y.left = x;
        x.right = t2;

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    rotateRight(y) {
        console.log(`\n➡ Rotação LL (Direita) no nó ${y.value}`);

        const x = y.left;
        const t2 = x.right;

        x.right = y;
        y.left = t2;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
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

        this.updateHeight(node);

        const balance = this.getBalance(node);

        // LL
        if (balance > 1 && value < node.left.value) {
            return this.rotateRight(node);
        }

        // RR
        if (balance < -1 && value > node.right.value) {
            return this.rotateLeft(node);
        }

        // LR
        if (balance > 1 && value > node.left.value) {
            console.log(`\n➡ Rotação LR no nó ${node.value}`);
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // RL
        if (balance < -1 && value < node.right.value) {
            console.log(`\n➡ Rotação RL no nó ${node.value}`);
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }

    printHeightsAndBalances(node) {
        if (node) {
            this.printHeightsAndBalances(node.left);

            console.log(
                `Nó ${node.value} | Altura = ${node.height} | FB = ${this.getBalance(node)}`
            );

            this.printHeightsAndBalances(node.right);
        }
    }

    isBalanced(node) {
        if (!node) return true;

        const balance = Math.abs(this.getBalance(node));

        return (
            balance <= 1 &&
            this.isBalanced(node.left) &&
            this.isBalanced(node.right)
        );
    }

    drawTree(node, level = 0) {
        if (!node) return;

        this.drawTree(node.right, level + 1);

        console.log("    ".repeat(level) + node.value);

        this.drawTree(node.left, level + 1);
    }
}

// ===============================
// Montando a árvore da atividade
// ===============================

const avl = new AVLTree();

[40, 20, 50, 10, 30, 60].forEach(v => {
    avl.root = avl.insert(avl.root, v);
});

console.log("===================================");
console.log("ÁRVORE INICIAL");
console.log("===================================");

avl.drawTree(avl.root);

console.log("\nAltura e Fator de Balanceamento:");

avl.printHeightsAndBalances(avl.root);

console.log(
    "\nÁrvore balanceada?",
    avl.isBalanced(avl.root) ? "SIM" : "NÃO"
);

// ===============================
// Inserindo 70
// ===============================

console.log("\n===================================");
console.log("INSERINDO O VALOR 70");
console.log("===================================");

avl.root = avl.insert(avl.root, 70);

console.log("\nÁrvore após inserir 70:");

avl.drawTree(avl.root);

console.log("\nAltura e Fator de Balanceamento:");

avl.printHeightsAndBalances(avl.root);

console.log(
    "\nÁrvore balanceada?",
    avl.isBalanced(avl.root) ? "SIM" : "NÃO"
);