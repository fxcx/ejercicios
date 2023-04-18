const sumarNumero = (miArreglo, sumNumero) => miArreglo.map(elem => elem + sumNumero);

const miArreglo = [1, 2, 3, 4, 5];
const sumNumero = 1;
const arrResult = sumarNumero(miArreglo, sumNumero);
console.log(arrResult);


