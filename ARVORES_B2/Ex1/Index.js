// INSERÇÃO SIMPLES E BALANCEAMENTO LL

/* Insira os valores 30, 20, 10 em uma árvore AVL
vazia.
– Mostre a árvore após cada inserção.
– Indique o fator de balanceamento de cada nó.
– Diga qual rotação é aplicada (se houver).
– Desenhe a árvore final.

• Objetivo: identificar e corrigir desbalanceamento
do tipo esquerda-esquerda (LL). */

const AVLTree = require("./AVLTree");

const avl = new AVLTree();

avl.add(30);
avl.add(20);
avl.add(10);

