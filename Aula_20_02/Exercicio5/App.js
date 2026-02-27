import { Carro, Moto } from "./Veiculos.js";

const carro = new Carro();
carro.modelo = "Civic";
carro.ano = 2020;

console.log(`Corrida iniciada com o ${carro.modelo} (${carro.ano})`);
carro.acelerar();
carro.frear();

const moto = new Moto();
moto.modelo = "CB 300";
moto.ano = 2015;

console.log(`Corrida iniciada com a ${moto.modelo} (${moto.ano})`);
moto.acelerar();
moto.acelerar();
moto.frear();
