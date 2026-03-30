/* O CEO quer saber o custo total apenas dos softwares que estão com status
"Ativo". Encadeie métodos (ex: filtre primeiro, depois some os valores) para
descobrir o valor total gasto com licenças ativas. */

const licencas = [
    { software: 'Pacote Office', custo: 1200, ativo: true },
    { software: 'Photoshop', custo: 800, ativo: false },
    { software: 'Antivírus', custo: 300, ativo: true },
    { software: 'CRM', custo: 2500, ativo: true },
];

const ativos = licencas.filter(item => item.ativo);

console.log(ativos);

const total = ativos.reduce((soma, item) => soma + item.custo, 0);

console.log(total);

