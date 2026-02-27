import { Funcionario, Gerente, Desenvolvedor } from "./Funcionario.js";

const funcionario = new Funcionario("Carlos", 3000);
const gerente = new Gerente("Mariana", 5000);
const dev = new Desenvolvedor("Lucas", 4000);

console.log(`${funcionario.nome} - Bônus: R$ ${funcionario.calcularBonus()}`);
console.log(`${gerente.nome} - Bônus: R$ ${gerente.calcularBonus()}`);
console.log(`${dev.nome} - Bônus: R$ ${dev.calcularBonus()}`);