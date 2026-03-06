//No app.js, importe e teste. 

import Animal from './Animal.js';
import Cachorro from './Cachorro.js';
import Gato from './Gato.js';

const animal = new Animal();
const dog = new Cachorro();
const cat = new Gato();

animal.falar();
dog.falar();
cat.falar();