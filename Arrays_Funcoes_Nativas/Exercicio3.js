/* O gerente de vendas quer saber o faturamento total do dia. Reduza o array
de valores a um único número que represente a soma de todas as vendas. */

const vendasDoDia = [150.50 , 400.00 , 20.00 , 89.90];
const total = vendasDoDia.reduce((acumulador, valorAual) => {return acumulador + valorAual;}, 0);

console.log(total);