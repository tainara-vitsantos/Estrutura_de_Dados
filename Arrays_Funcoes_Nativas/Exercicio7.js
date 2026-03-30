/* O marketing tem uma lista de leads classificados por pontuação. Eles
querem apenas os 3 primeiros para mandar um brinde, mas sem modificar
a lista original. Extraia uma cópia dos 3 primeiros elementos do array. */


const leadsRankeados = ['Lead A', 'Lead B', 'Lead C', 'Lead D', 'Lead E'];

const comeco = leadsRankeados.slice(0,3);

console.log(comeco);
