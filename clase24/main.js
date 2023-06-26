// dotenv

// const dotenv = require('dotenv')

// dotenv.config()

// console.log(process.env.VARIABLE_UNO)


// primera forma de hacerlo, pasarlas de a una

// import { multiply } from './utils.js'

// console.log(multiply(20, 5))

// la segunda forma de importarlo

// import utils from './utils.js'

// console.log(utils.multiply(20, 5))


// fay sistem

// import fs from 'node:fs'

// const data = fs.readFileSync('./datos.txt', 'utf-8')

// console.log(data)


import fs from 'node:fs';

// Leer el archivo datos.txt
const data = fs.readFileSync('./datos.txt', 'utf-8');

// Contar la cantidad de números pares
const numbers = data.split(/\D+/);
let count = 0;

for (const num of numbers) {
  if (num !== '' && parseInt(num) % 2 === 0) {
    count++;
  }
}

// Crear y escribir en el archivo de respuesta
fs.writeFileSync('./datos.txt', `La cantidad de números pares en el archivo datos.txt es: ${count}`);

console.log('Archivo respuesta.txt creado y actualizado con la respuesta.')

