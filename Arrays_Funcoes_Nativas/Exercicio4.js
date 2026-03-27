/* Um diretor ligou reclamando do chamado de urgência número 1043. O
suporte precisa encontrar os detalhes desse chamado específico. Encontre
e retorne o objeto exato correspondente ao id: 1043. */

const chamados = [
    {id: 1041, status: 'Aberto', urgencia: 'Baixo'},
    {id: 1042, status: 'Fechado', urgencia: 'Média'},
    {id: 1043, status: 'Aberto', urgencia: 'Alta'},
    
];

const chamado = chamados.find(u => u.id === 1043);
console.log(chamado);