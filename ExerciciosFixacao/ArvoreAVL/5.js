/* Insira os valores 10, 20, 30, 40, 50, 60, 70:
– Em uma BST comum (sem balanceamento).
– Em uma AVLTree.
• Desenhe as duas árvores.
• Compare suas alturas.
• Mostre os percursos in-order de ambas.
• Explique por que a AVL é mais eficiente para operações de busca.
• Objetivo: comparar BST vs AVL na prática. */


// ======================================
// NÓ
// ======================================

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

// ======================================
// BST COMUM
// ======================================

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this.insertNode(this.root, value);
    }

    insertNode(node, value) {
        if (node === null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else {
            node.right = this.insertNode(node.right, value);
        }

        return node;
    }

    getHeight(node) {
        if (node === null) return 0;

        return (
            1 +
            Math.max(
                this.getHeight(node.left),
                this.getHeight(node.right)
            )
        );
    }

    inOrder(node, result = []) {
        if (node) {
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }

        return result;
    }

    drawTree(node, level = 0) {
        if (!node) return;

        this.drawTree(node.right, level + 1);

        console.log("    ".repeat(level) + node.value);

        this.drawTree(node.left, level + 1);
    }
}

// ======================================
// AVL
// ======================================

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

    insert(value) {
        this.root = this.insertNode(this.root, value);
    }

    insertNode(node, value) {
        if (!node) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
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
            return this.rotateRight(node);
        }

        // RR
        if (balance < -1 && value > node.right.value) {
            return this.rotateLeft(node);
        }

        // LR
        if (balance > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // RL
        if (balance < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }

    inOrder(node, result = []) {
        if (node) {
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }

        return result;
    }

drawTree() {

    if (!this.root) return;

    console.log("\n");

    console.log(
        `           ${this.root.value}`
    );

    console.log(
        `         /     \\`
    );

    console.log(
        `      ${this.root.left?.value ?? " "}       ${this.root.right?.value ?? " "}`
    );

    console.log(
        `     /   \\     /   \\`
    );

    console.log(
        `${this.root.left?.left?.value ?? " "}   ${
            this.root.left?.right?.value ?? " "
        }   ${
            this.root.right?.left?.value ?? " "
        }   ${
            this.root.right?.right?.value ?? " "
        }`
    );

    console.log("\n");
}
}

// ======================================
// TESTE DA ATIVIDADE
// ======================================

const valores = [10, 20, 30, 40, 50, 60, 70];

const bst = new BST();
const avl = new AVLTree();

valores.forEach(v => {
    bst.insert(v);
    avl.insert(v);
});

// ======================================
// BST
// ======================================

console.log("\n=================================");
console.log("ÁRVORE BST");
console.log("=================================\n");

bst.drawTree(bst.root);

const alturaBST = bst.getHeight(bst.root);

console.log("\nAltura BST:", alturaBST);

console.log(
    "In-Order BST:",
    bst.inOrder(bst.root).join(" -> ")
);

// ======================================
// AVL
// ======================================

console.log("\n=================================");
console.log("ÁRVORE AVL");
console.log("=================================\n");

avl.drawTree();

const alturaAVL = avl.getHeight(avl.root);

console.log("\nAltura AVL:", alturaAVL);

console.log(
    "In-Order AVL:",
    avl.inOrder(avl.root).join(" -> ")
);

// ======================================
// COMPARAÇÃO
// ======================================

console.log("\n=================================");
console.log("COMPARAÇÃO");
console.log("=================================");

console.log(`Altura BST = ${alturaBST}`);
console.log(`Altura AVL = ${alturaAVL}`);

if (alturaAVL < alturaBST) {
    console.log(
        "\nA AVL possui menor altura e, portanto, buscas mais eficientes."
    );
} else {
    console.log(
        "\nAs árvores possuem a mesma altura."
    );
}