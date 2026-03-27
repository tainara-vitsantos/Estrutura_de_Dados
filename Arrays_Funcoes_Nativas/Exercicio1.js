/* O RH precisa de uma lista apenas com os desenvolvedores de nível
"Senior" para um novo projeto. Use uma função para retornar um novo array
contendo apenas os funcionários com o cargo de "Senior". */

const funcionarios = [
    {nome: 'João', cargo: 'Junior'},
    {nome: 'Ana', cargo: 'Senior'},
    {nome: 'Carlos', cargo: 'Pleno'},
    {nome: 'Beatriz', cargo: 'Senior'}
];

const seniors = funcionarios.filter(func => func.cargo === 'Senior');

console.log(seniors);
