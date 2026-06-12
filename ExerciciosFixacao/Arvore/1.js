/* ) Considere todas as estruturas de dados estudadas até hoje e faça um
bechmark para avaliar o desempenho delas. Abaixo estão as instruções
de metodologia:
a) Cada estrutura deverá ter 10 mil elementos
b) Teste a velocidade de inserção
c) Teste a velocidade de listagem
d) Teste a velocidade de remoção
e) Organize os dados em uma planilha e apresente suas conclusões de qual melhor
caso de uso para cada estrutura de dados */


class Node {
    constructor(value) {
        this.value = value; 
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        let current = this.root;    
        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    inOrderTraversal(node, result = []) {
        if (node !== null) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }

    remove(value) {
        this.root = this._removeNode(this.root, value);
    }

    _removeNode(node, value) {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            node.left = this._removeNode(node.left, value);
            return node;
        }
        if (value > node.value) {
            node.right = this._removeNode(node.right, value);
            return node;
        }
        if (node.left === null && node.right === null) {
            return null;
        }
        if (node.left === null) {
            return node.right;
        }
        if (node.right === null) {
            return node.left;
        }
        const minRight = this._findMin(node.right);
        node.value = minRight.value;
        node.right = this._removeNode(node.right, minRight.value);
        return node;
    }

    _findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
}

// Benchmarking
const bst = new BinarySearchTree();
const values = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));
console.time('Insertion');
values.forEach(value => bst.insert(value));
console.timeEnd('Insertion');
console.time('Listing');
const listedValues = bst.inOrderTraversal(bst.root);
console.timeEnd('Listing'); 
console.time('Removal');
values.forEach(value => bst.remove(value));
console.timeEnd('Removal');

