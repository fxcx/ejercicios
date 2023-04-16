let lowerLimitEven = 2;
let upperLimitEven = 10;
let lowerLimitOdd = 1;
let upperLimitOdd = 9;

function mostrarNumeros(lowerLimit, upperLimit, mostrarPares) {
    for (let i = lowerLimit; i <= upperLimit; i++) {
      if (mostrarPares && i % 2 === 0) {
        console.log(`El número ${i} es par`);
      } else if (!mostrarPares && i % 2 !== 0) {
        console.log(`El número ${i} es impar`);
      }
    }
  }

  mostrarNumeros(lowerLimitEven, upperLimitEven, true);
  mostrarNumeros(lowerLimitOdd, upperLimitOdd, false);