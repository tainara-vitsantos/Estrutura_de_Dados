/* A empresa bateu a meta e todos os funcionários vão receber um bônus de
10% em cima do salário atual. Crie um novo array com os salários
reajustados (multiplicados por 1.10). */

const salarios = [3000 , 4500 , 6000 , 8500];

const bonus = salarios.map(n => (n * 0.10) + n);

console.log(bonus);

