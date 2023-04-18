function findUniq(distinto) {
    let uniqueNumber = distinto[0]; // el numero que no sea 1
    
    for(let i = 1; i < distinto.length; i++) {
      if(distinto[i] !== uniqueNumber) {
        return distinto[i];
      }
    }
    
    return uniqueNumber;
  }
  

  const numeros = [1,2,1,1,1,1,1,1];
  const numeroUnique = findUniq(numeros); 
  console.log(numeroUnique);