/* Insira os valores 30, 20, 10 em uma árvore AVL vazia.
- Mostre a árvore após cada inserção
- Indique o fator de balanceamento de cada nó
- Diga qual rotação foi aplicada
- Desenhe a árvore final
*/

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

        return node
            ? node.height
            : 0;
    }

    getBalance(node) {

        return node
            ? this.getHeight(node.left)
            - this.getHeight(node.right)
            : 0;
    }

    updateHeight(node) {

        node.height =
            1 +
            Math.max(
                this.getHeight(node.left),
                this.getHeight(node.right)
            );
    }

    rotateRight(y) {

        console.log(
            "\n➡ Rotação aplicada: LL (Direita)"
        );

        const x =
            y.left;

        const t2 =
            x.right;

        x.right =
            y;

        y.left =
            t2;

        this.updateHeight(y);

        this.updateHeight(x);

        return x;
    }

    insert(node, value) {

        if (!node) {

            return new Node(value);
        }

        if (
            value <
            node.value
        ) {

            node.left =
                this.insert(
                    node.left,
                    value
                );

        } else {

            node.right =
                this.insert(
                    node.right,
                    value
                );
        }

        this.updateHeight(
            node
        );

        const balance =
            this.getBalance(
                node
            );

        // Caso LL

        if (
            balance > 1 &&
            value <
            node.left.value
        ) {

            return this.rotateRight(
                node
            );
        }

        return node;
    }

    printBalances(node) {

        if (!node)
            return;

        this.printBalances(
            node.left
        );

        console.log(
            `Nó ${node.value} | Altura = ${node.height} | FB = ${this.getBalance(node)}`
        );

        this.printBalances(
            node.right
        );
    }

    drawTree(node = this.root) {

        if (!node)
            return;

        console.log("\n");

        console.log(
            `           ${node.value}`
        );

        console.log(
            `         /     \\`
        );

        console.log(
            `      ${node.left?.value ?? " "}       ${node.right?.value ?? " "}`
        );

        console.log(
            `     /   \\     /   \\`
        );

        console.log(
            `   ${node.left?.left?.value ?? " "}   ${
                node.left?.right?.value ?? " "
            }   ${
                node.right?.left?.value ?? " "
            }   ${
                node.right?.right?.value ?? " "
            }`
        );

        console.log("\n");
    }
}

// ==========================
// TESTE
// ==========================

const avl =
    new AVLTree();

const valores =
    [30, 20, 10];

for (
    let valor
    of valores
) {

    console.log(
        "\n======================="
    );

    console.log(
        `Inserindo ${valor}`
    );

    console.log(
        "======================="
    );

    avl.root =
        avl.insert(
            avl.root,
            valor
        );

    avl.drawTree();

    console.log(
        "Alturas e Fatores:"
    );

    avl.printBalances(
        avl.root
    );
}

console.log(
"\n======================="
);

console.log(
"ÁRVORE FINAL"
);

console.log(
"======================="
);

avl.drawTree();

console.log(
"Fatores finais:"
);

avl.printBalances(
    avl.root
);

console.log(`
Conclusão:
Houve desbalanceamento do tipo LL.
Foi aplicada rotação simples à direita.
`);