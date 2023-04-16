function eliminarFrutas(arreglo) {
    if (arreglo.length < 5) {                         // si la longitud es menor de 5
      return "Error: el arreglo debe tener al menos 5 elementos";
    } else {                                         
      arreglo.splice(-3);                             //si no uso el metodo splice para eliminar, por que si seria posible
      return arreglo;
    }
  }

const misFrutas = [1, 2, 3, 4]; // guarado el arreglo en una variable
const resultado = eliminarFrutas(misFrutas);
console.log(resultado);





// funcion anonima

const frutasModificadas = function(arr) {
    if (arr.length < 5) {
      console.log("El arreglo debe tener al menos 5 elementos");
    } else {
      arr.splice(-3);
      console.log(`las frutas fueron mofidicadas ${arr}`);
    }
  }
  
  frutasModificadas([1, 2, 3, 4]); // El arreglo debe tener al menos 5 elementos
  frutasModificadas([1, 2, 3, 4, 5, 6, 7]); // Arreglo modificado: 1,2,3,4
  
  
  
