function findUniq(arr) {
    let uniqueNumber = arr[0]; // el numero que no sea 1, seria en la posicion 0
    
    for(let i = 1; i < arr.length; i++) {
      if(arr[i] !== uniqueNumber) {
        return arr[i];
      }
    }
    
    return uniqueNumber;
  }
  
  // Ejemplo de uso
  const numeros = [1,2,1,1,1,1,1,1];
  const numeroUnique = findUniq(numeros); 
  console.log(numeroUnique);