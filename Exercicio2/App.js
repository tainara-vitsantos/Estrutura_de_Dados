/*  No app.js, simule uma corrida de 3
acelerações e 1 freada. */

import Carro from './Carro.js';

const carro1 = new Carro();
carro1.modelo = 'Fusca';
carro1.ano = 1980;

console.log(`Corrida iniciada com o ${carro1.modelo} (${carro1.ano})`);

carro1.acelerar(); // +10
carro1.acelerar(); // +10
carro1.acelerar(); // +10
carro1.frear();    // -5

console.log(`Velocidade final: ${carro1.velocidade} km/h`);