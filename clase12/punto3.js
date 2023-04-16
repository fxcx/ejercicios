const sumarNumero = (arr, num) => arr.map(elem => elem + num);

const miArreglo = [1, 2, 3, 4, 5];
const sumNumero = 1;
const arregloModificado = sumarNumero(miArreglo, sumNumero);
console.log(arregloModificado);
