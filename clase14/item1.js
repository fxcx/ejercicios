const CalculateTotal = (items, impuesto, descuento) => {
    
  let valueTotal = 0;

  items.forEach(item => {
    valueTotal += item;
  });

  if (valueTotal * impuesto)
  if (valueTotal * descuento)
  
  
  return valueTotal.toFixed(2);
}

const items = [10, 20, 30];
let impuesto = 0.05;
let descuento = 0.10;

const elProfeEstuvoAqui = CalculateTotal(items, impuesto, descuento);
console.log("Total: " + elProfeEstuvoAqui);


  
