const Node = require("./Node");

class AVLTree {
  constructor() {
    this.root = null;
  }

  // Altura do nó
  height(node) {
    return node ? node.height : 0;
  }

  // Fator de balanceamento
  getBalance(node) {
    return node
      ? this.height(node.left) - this.height(node.right)
      : 0;
  }

  // Rotação simples à direita
  rightRotate(y) {
    console.log(`Rotação à direita em ${y.value}`);

    let x = y.left;
    let T2 = x.right;

    // Rotação
    x.right = y;
    y.left = T2;

    // Atualiza alturas
    y.height =
      Math.max(this.height(y.left), this.height(y.right)) + 1;

    x.height =
      Math.max(this.height(x.left), this.height(x.right)) + 1;

    return x;
  }

  // Inserção
  insert(node, value) {

    if (!node) {
      console.log(`Inserindo ${value}`);
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.insert(node.left, value);

    } else if (value > node.value) {
      node.right = this.insert(node.right, value);

    } else {
      return node;
    }

    // Atualiza altura
    node.height =
      1 + Math.max(this.height(node.left), this.height(node.right));

    // Balanceamento
    let balance = this.getBalance(node);

    console.log(`Nó ${node.value} -> FB = ${balance}`);

    // Caso LL
    if (balance > 1 && value < node.left.value) {
      return this.rightRotate(node);
    }

    return node;
  }

  add(value) {
    this.root = this.insert(this.root, value);

    console.log("\nÁrvore atual:");
    this.printTree(this.root);
    console.log("----------------");
  }

  // Exibir árvore
  printTree(node, space = 0, level = 5) {
    if (node === null) return;

    space += level;

    this.printTree(node.right, space);

    console.log(" ".repeat(space - level) + node.value);

    this.printTree(node.left, space);
  }
}

module.exports = AVLTree;