const CalculateTotal = (items, tax, discount) => {
    
  let valueTotal = 0;

  items.forEach(item => {
    valueTotal += item;
  });

  if (valueTotal * tax)
  if (valueTotal * discount)
  
  
  return valueTotal.toFixed(2);
}

const items = [10, 20, 30];
let tax = 0.05;
let discount = 0.10;

const elProfeEstuvoAqui = CalculateTotal(items, tax, discount);
console.log("Total: " + elProfeEstuvoAqui);


  
