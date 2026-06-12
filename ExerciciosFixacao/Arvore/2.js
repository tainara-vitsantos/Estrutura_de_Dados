/* Exercício – Árvore Binária de Busca (ABB)

1. Inserir:
50, 30, 70, 20, 40, 60, 80

2. Mostrar árvore

3. Mostrar:
- Pré-ordem
- Em ordem
- Pós-ordem

4. Calcular:
- altura
- quantidade de nós
- folhas

5. Remover 30

6. Mostrar árvore final
*/

class Node {

    constructor(value) {

        this.value = value;

        this.left = null;

        this.right = null;
    }
}

class BinaryTree {

    constructor() {

        this.root = null;
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

        return node;
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

    preOrder(
        node,
        result = []
    ) {

        if (node) {

            result.push(
                node.value
            );

            this.preOrder(
                node.left,
                result
            );

            this.preOrder(
                node.right,
                result
            );
        }

        return result;
    }

    inOrder(
        node,
        result = []
    ) {

        if (node) {

            this.inOrder(
                node.left,
                result
            );

            result.push(
                node.value
            );

            this.inOrder(
                node.right,
                result
            );
        }

        return result;
    }

    postOrder(
        node,
        result = []
    ) {

        if (node) {

            this.postOrder(
                node.left,
                result
            );

            this.postOrder(
                node.right,
                result
            );

            result.push(
                node.value
            );
        }

        return result;
    }

    height(node) {

        if (!node)
            return 0;

        return (
            1 +
            Math.max(
                this.height(
                    node.left
                ),
                this.height(
                    node.right
                )
            )
        );
    }

    countNodes(node) {

        if (!node)
            return 0;

        return (
            1 +
            this.countNodes(
                node.left
            )
            +
            this.countNodes(
                node.right
            )
        );
    }

    countLeaves(node) {

        if (!node)
            return 0;

        if (
            !node.left &&
            !node.right
        ) {

            return 1;
        }

        return (
            this.countLeaves(
                node.left
            )
            +
            this.countLeaves(
                node.right
            )
        );
    }

    remove(node, value) {

        if (!node)
            return null;

        if (
            value <
            node.value
        ) {

            node.left =
                this.remove(
                    node.left,
                    value
                );

        }

        else if (
            value >
            node.value
        ) {

            node.right =
                this.remove(
                    node.right,
                    value
                );
        }

        else {

            if (
                !node.left
            )
                return node.right;

            if (
                !node.right
            )
                return node.left;

            let menor =
                this.findMin(
                    node.right
                );

            node.value =
                menor.value;

            node.right =
                this.remove(
                    node.right,
                    menor.value
                );
        }

        return node;
    }

    findMin(node) {

        while (
            node.left
        ) {

            node =
                node.left;
        }

        return node;
    }
}

// ======================
// TESTE
// ======================

const tree =
    new BinaryTree();

[
50,
30,
70,
20,
40,
60,
80
]
.forEach(
v =>
tree.root =
tree.insert(
tree.root,
v
)
);

console.log(
"=================="
);

console.log(
"ÁRVORE INICIAL"
);

console.log(
"=================="
);

tree.drawTree();

console.log(
"Pré-Ordem:"
);

console.log(
tree.preOrder(
tree.root
)
);

console.log(
"\nEm Ordem:"
);

console.log(
tree.inOrder(
tree.root
)
);

console.log(
"\nPós-Ordem:"
);

console.log(
tree.postOrder(
tree.root
)
);

console.log(
"\nAltura:"
);

console.log(
tree.height(
tree.root
)
);

console.log(
"\nQuantidade de Nós:"
);

console.log(
tree.countNodes(
tree.root
)
);

console.log(
"\nQuantidade de Folhas:"
);

console.log(
tree.countLeaves(
tree.root
)
);

// ======================
// REMOVER
// ======================

console.log(
"\nRemovendo 30..."
);

tree.root =
tree.remove(
tree.root,
30
);

console.log(
"\nÁrvore Final:"
);

tree.drawTree();

console.log(
"Em Ordem:"
);

console.log(
tree.inOrder(
tree.root
)
);