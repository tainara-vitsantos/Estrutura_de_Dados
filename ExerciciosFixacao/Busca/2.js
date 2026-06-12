/* Você está desenvolvendo o módulo de indexação de um prontuário psicológico. Os registros são organizados em uma Árvore Binária de Busca (BST) baseada no ID numérico do paciente. Para gerar um relatório sequencial de auditoria e conformidade, você precisa extrair todos os registros de forma ordenada.

a) Escreva um método chamado obterCaminhoOrdenado() para a classe da sua BST.

b) O método deve realizar um percurso In-Order (Em-ordem) de forma puramente recursiva.

c) À medida que o percurso é realizado, adicione o ID de cada nó visitado a um array temporário.

Entregável: O código completo do método e da função auxiliar recursiva, retornando o array final com os IDs ordenados crescentemente. */


class No {
  constructor(id) {
    this.id = id;
    this.esquerda = null;
    this.direita = null;
  }
}

class BST {
  constructor() {
    this.raiz = null;
  }

  // Método público que inicia o processo
  obterCaminhoOrdenado() {
    const resultado = [];

    // função auxiliar recursiva
    function emOrdem(no) {
      if (no === null) return;

      // 1. percorre a subárvore esquerda
      emOrdem(no.esquerda);

      // 2. visita o nó atual
      resultado.push(no.id);

      // 3. percorre a subárvore direita
      emOrdem(no.direita);
    }

    emOrdem(this.raiz);
    return resultado;
  }
}