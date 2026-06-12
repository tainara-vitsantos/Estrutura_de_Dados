/* Insira os valores 30, 20, 10 em uma árvore AVL
vazia.
– Mostre a árvore após cada inserção.
– Indique o fator de balanceamento de cada nó.
– Diga qual rotação é aplicada (se houver).
– Desenhe a árvore final.
• Objetivo: identificar e corrigir desbalanceamento
do tipo esquerda-esquerda (LL). */ 

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

    insert(node, value) {
        if (!node) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this.insert(node.left, value);
        } else {
            node.right = this.insert(node.right, value);
        }

        node.height =
            1 +
            Math.max(
                this.getHeight(node.left),
                this.getHeight(node.right)
            );

        const balance = this.getBalance(node);

        // Caso LL
        if (balance > 1 && value < node.left.value) {
            console.log("\nRotação aplicada: LL (rotação à direita)");
            return this.rotateRight(node);
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
}

const avl = new AVLTree();

console.log("=================================");
console.log("Inserção do valor 30");
console.log("=================================");

avl.root = avl.insert(avl.root, 30);

console.log(`
30
`);

console.log("Fatores de Balanceamento:");
avl.printBalances(avl.root);

console.log("\n=================================");
console.log("Inserção do valor 20");
console.log("=================================");

avl.root = avl.insert(avl.root, 20);

console.log(`
   30
  /
20
`);

console.log("Fatores de Balanceamento:");
avl.printBalances(avl.root);

console.log("\n=================================");
console.log("Inserção do valor 10");
console.log("=================================");

console.log("Árvore antes da correção:");

console.log(`
     30
    /
   20
  /
10
`);

console.log("Fatores de Balanceamento:");

console.log("Nó 10 -> FB = 0");
console.log("Nó 20 -> FB = 1");
console.log("Nó 30 -> FB = 2");

avl.root = avl.insert(avl.root, 10);

console.log("\n=================================");
console.log("Árvore Final Balanceada");
console.log("=================================");

console.log(`
    20
   /  \\
 10   30
`);

console.log("Fatores de Balanceamento Finais:");
avl.printBalances(avl.root);

console.log(`
Conclusão:
Ocorreu um desbalanceamento do tipo LL (Left-Left).
Foi aplicada uma rotação simples à direita no nó 30,
resultando em uma árvore AVL balanceada.
`);