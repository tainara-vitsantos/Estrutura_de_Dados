/* O armazém precisa listar os produtos do menor para o maior nível de
estoque para saber o que comprar primeiro. Ordene os produtos de forma
crescente baseando-se na propriedade quantidade. */

const estoque = [
    {produto: 'Teclado', quantidade: 45},
    {produto: 'Mouse', quantidade: 12},
    {produto: 'Monitor', quantidade: 30}
];

estoque.sort((a, b) => a.quantidade - b.quantidade);

console.log(estoque);