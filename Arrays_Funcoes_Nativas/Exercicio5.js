/* O setor de compliance precisa garantir que todos os funcionários da lista
completaram o treinamento de segurança da informação. Verifique se
todos os itens possuem a propriedade treinamentoConcluido como true. O
retorno deve ser um booleano. */

const equipe = [
    {nome: 'Marcos', treinamentoConcluido: true },
    {nome: 'Fernanda', treinamentoConcluido: true },
    {nome: 'Roberto', treinamentoConcluido: false },
];

const todosConcluidos = equipe.every(funcionario => funcionario.treinamentoConcluido === true);

console.log(todosConcluidos);